import React, { useContext } from "react";
import AlertContext from "../../contexts/alertContext";

const Alert = () => {
  const { error, setError } = useContext(AlertContext);

  return (
    <>
      {error && (
        <div
          className="alert alert-danger d-flex justify-content-between"
          role="alert"
        >
          <div>{error}</div>
          <div
            onClick={() => {
              setError("");
            }}
          >
            x
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
