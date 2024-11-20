import { useEffect } from "react";
import { axiosInstance } from "../axios/interceptors";

/*
Interceptors in Axios are used to modify requests or responses before they are sent or after
they are received, providing a centralized way to apply transformations, handle authentication,
logging, error handling, and more.
*/

const Interceptors = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance("/react-store-products"); // Check axios -> interceptors.js file
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-10">
      <p className="read-the-docs">
        {" "}
        Interceptors Advance Configaration (Sixth)
      </p>
      <p className="read-the-docs">
        {" "}
        See console tab and network api using interceptors with custom axios
        instance...see codebase
      </p>
    </div>
  );
};

export default Interceptors;
