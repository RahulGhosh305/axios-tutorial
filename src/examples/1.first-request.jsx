import axios from "axios";
import { useEffect, useState } from "react";
import ShoppingCard from "../components/ShoppingCard";

const URL = `https://www.course-api.com/react-store-products`;

const FirstRequest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Axios Request
  const fetchData = async () => {
    try {
      const res = await axios(URL); // Handle the success || {data} = await axios(URL)
      setData(res.data);
    } catch (error) {
      console.log(error.message); // Handle the error
    } finally {
      console.log("Call fetchData function"); // Code that will always run, regardless of success or error
    }
  };

  return (
    <div className="space-y-10">
      <p className="read-the-docs"> Simple Request (First)</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.slice(0, 4).map((singleItem, index) => (
          <ShoppingCard key={index} singleItem={singleItem} />
        ))}
      </div>
    </div>
  );
};

export default FirstRequest;
