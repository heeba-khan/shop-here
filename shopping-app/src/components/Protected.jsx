import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ children }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      // return null;
    }
  },[navigate]);

  return <>{children}</>;
}

export default Protected;
