import axios from "axios";
import { useEffect } from "react";

/* 
Use global instance if Common headers are share 
Best Use Custom Instance
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
        instance...
      </p>
    </div>
  );
};

export default GlobalInstance;
