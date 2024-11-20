import { useEffect } from "react";

const Interceptors = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log("Axios Interceptors...");
  };

  return (
    <div className="space-y-10">
      <p className="read-the-docs">
        {" "}
        Interceptors Advance Configaration (Sixth)
      </p>
    </div>
  );
};

export default Interceptors;
