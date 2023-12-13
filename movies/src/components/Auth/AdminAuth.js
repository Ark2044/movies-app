import React from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const AdminAuth = () => {
  const navigate = useNavigate();

  const getData = (data) => {
    console.log("admin", data);

    if (data.onRedirect) {
      // Redirect to the desired page
      navigate("/");
    }
  };

  return (
    <div>
      {/* Make sure to pass onRedirect prop */}
      <AuthForm onSubmit={getData} isAdmin={true} onRedirect={(url) => navigate(url)} />
    </div>
  );
};

export default AdminAuth;
