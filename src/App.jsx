import "./App.css";
import "./axios/global"; // Global Axios Instance Setup for EXAMPLE FOUR

// import GetRequest from "./examples/1.get-request";
// import RequestWithHeader from "./examples/2.headers";
// import PostRequest from "./examples/3.post-request";
import GlobalInstance from "./examples/4.global-instance";

function App() {
  return (
    <>
      <p className="read-the-docs text-2xl font-bold underline">
        === Axios Tutorial ====
      </p>

      {/* FIRST EXAMPLE */}
      {/* <GetRequest /> */}

      {/* SECOND EXAMPLE */}
      {/* <RequestWithHeader /> */}

      {/* THIRD EXAMPLE */}
      {/* <PostRequest /> */}

      {/* FOURTH EXAMPLE */}
      <GlobalInstance />
    </>
  );
}

export default App;
