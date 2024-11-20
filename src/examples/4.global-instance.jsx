import axios from "axios";
import { useEffect } from "react";

/* 
Check axios -> global.js file
Use global instance if Common headers are share 
Use When Same Base Url Share
So Best Use is Custom Instance
*/

const productUrl = `https://www.course-api.com/react-store-products`;
const userUrl = `https://randomuser.me/api`;

const GlobalInstance = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res1 = await axios(productUrl);
      const res2 = await axios(userUrl);
      console.log(res1, res2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-10">
      <p className="read-the-docs"> Global Instance (Fourth)</p>
      <p className="read-the-docs">
        {" "}
        See network tab both api share common haeders by using global
        instance...see codebase
      </p>
    </div>
  );
};

export default GlobalInstance;
