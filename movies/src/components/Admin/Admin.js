import React from 'react';
import AuthForm from '../Auth/AuthForm';
import { sendAdminAuthRequest } from '../../API-Helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const onResReceived = (data) => {
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.id);
    localStorage.setItem("token", data.token);

    // Redirect to the admin dashboard or any other desired page
    navigate("/");
  };

  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} onRedirect={(url) => navigate(url)} />
    </div>
  );
};

export default Admin;
