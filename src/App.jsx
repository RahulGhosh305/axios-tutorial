import "./App.css";
// import FirstRequest from "./examples/1.first-request";
import RequestWithHeader from "./examples/2.headers";

function App() {
  return (
    <>
      <p className="read-the-docs text-2xl font-bold underline">
        === Axios Tutorial ====
      </p>

      {/* FIRST EXAMPLE */}
      {/* <FirstRequest /> */}

      {/* SECOND EXAMPLE */}
      <RequestWithHeader />
    </>
  );
}

export default App;
