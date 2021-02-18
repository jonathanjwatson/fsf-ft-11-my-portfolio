import React from "react";

const AlertContext = React.createContext({
    error: "",
    setError: () => {}
});

export default AlertContext;