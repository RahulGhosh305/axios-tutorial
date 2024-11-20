import axios from "axios";
import appConfig from "configs/app.config";
import { REQUEST_HEADER_AUTH_KEY, TOKEN_TYPE } from "constants/api.constant";
import { PERSIST_STORE_NAME } from "constants/app.constant";
import { setUser } from "store/auth/userSlice";
import deepParseJson from "utils/deepParseJson";
import errorToast from "utils/errorToast";
import keycloak from "../keycloak";
import store from "../store";
import { onSignOutSuccess } from "../store/auth/sessionSlice";
var JSONbig = require("json-bigint")({ storeAsString: true });

const unauthorizedCode = [401];

const axiosInstance = axios.create({
  timeout: 120000,
  baseURL: appConfig.apiPrefix,
  transformResponse: [
    function (data) {
      try {
        return JSONbig.parse(data);
      } catch (error) {
        return data;
      }
    },
  ],
});

axiosInstance.interceptors.request.use(
  (config) => {
    const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
    const persistData = deepParseJson(rawPersistData);
    const accessToken = persistData.auth.session.token;

    if (accessToken)
      config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;

    const { isEsbApi = false, isBlob = false } = config;
    if (isEsbApi) config.baseURL = appConfig.esbApiPrefix;
    if (isBlob) config.responseType = "blob";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error;
    const { showErrorToast = true, moduleTitle = "" } = config;

    if (response && unauthorizedCode.includes(response.status)) {
      store.dispatch(onSignOutSuccess());
      store.dispatch(setUser({}));
      keycloak.logout();
    } else {
      if (showErrorToast) errorToast({ error, moduleTitle });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
