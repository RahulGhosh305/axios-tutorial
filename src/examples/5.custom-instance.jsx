import axios from "axios";
import { useEffect } from "react";
import customAxiosInstance from "../axios/custom";

const userUrl = `https://randomuser.me/api`;

const CustomInstance = () => {
  useEffect(() => {
    fetchData();
  }, []);

  //   Custom Axios Instance
  const fetchData = async () => {
    try {
      const { data } = await customAxiosInstance("/react-store-products"); // Check axios -> custom.js file
      const { data2 } = await axios(userUrl);
      console.log(data, data2);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="space-y-10">
      <p className="read-the-docs"> Custom Instance (Fifth)</p>
      <p className="read-the-docs">
        {" "}
        See network tab both api use Different baseUrl and haeders by using
        custom instance...see codebase
      </p>
    </div>
  );
};

export default CustomInstance;
