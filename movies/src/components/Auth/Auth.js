import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthRequest } from "../../API-Helpers/api-helpers";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onResReceived = (data) => {
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
  };

  const getData = (data) => {
    console.log("Calling to", data);
    sendUserAuthRequest(data.inputs, data.signup)
      .then((res) => {
        onResReceived(res);

        // Use onRedirect callback for redirection
        if (data.onRedirect) {
          data.onRedirect("/"); // Adjust the URL accordingly
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* Make sure to pass onRedirect prop */}
      <AuthForm
        onSubmit={getData}
        isAdmin={false}
        onRedirect={(url) => navigate(url)}
      />
    </div>
  );
};

export default Auth;
