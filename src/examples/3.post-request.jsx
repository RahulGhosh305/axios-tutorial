import axios from "axios";
import { useState } from "react";
import Loading from "../components/Loading";

const URL = `https://jsonplaceholder.typicode.com/posts`;

const PostRequest = () => {
  const [state, setState] = useState({
    data: {},
    status: false,
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //   Axios Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    setState({ ...state, status: true });

    const payload = {
      title,
      body,
    };

    try {
      const { data } = await axios.post(URL, payload); // Handle the success
      setState({
        data: data,
        status: false,
      });
    } catch (error) {
      console.log(error.message); // Handle the error
    } finally {
      console.log("Post form values..."); // Code that will always run, regardless of success or error
    }
  };

  return (
    <div className="space-y-10">
      <p className="read-the-docs"> Simple Post Request (Third)</p>

      <div className="max-w-sm mx-auto p-4 bg-gray-100 rounded-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-left mb-2">
              Title
            </label>
            <input
              type="text"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="body" className="text-sm text-left  mb-2">
              Body
            </label>
            <input
              type="text"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Body"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post
          </button>
        </form>

        <div className="mt-5">
          {state.status === true ? (
            <Loading />
          ) : Object.keys(state.data).length > 0 ? (
            `Title is - ${state.data.title} Body is - ${state.data.body}`
          ) : (
            "No data post"
          )}
        </div>
      </div>
    </div>
  );
};

export default PostRequest;
