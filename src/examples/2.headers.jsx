import axios from "axios";
import { useState } from "react";
import Loading from "../components/Loading";

const URL = `https://icanhazdadjoke.com/`;

const RequestWithHeader = () => {
  const [data, setData] = useState({ joke: "Random Joke...", state: null });

  // Axios Request
  const fetchJoke = async () => {
    setData({ ...data, state: 102 });

    try {
      const res = await axios(URL, {
        headers: {
          Accept: "application/json", // headers contain extra data
        },
      });
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("Call fetchJoke function");
    }
  };

  return (
    <div className="space-y-5">
      <p className="read-the-docs"> With Headers Request (Second) </p>

      <button
        type="btn"
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded hover:opacity-90 transition"
        onClick={() => fetchJoke()}
      >
        Read a Joke
      </button>

      <div className="border-purple-600 border-2 max-w-4xl mx-auto m-5 p-5 bg-gray-100">
        {data?.state === 102 ? (
          <Loading />
        ) : (
          <p className="font-light">
            <i>&ldquo;{data.joke}&rdquo;</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default RequestWithHeader;
