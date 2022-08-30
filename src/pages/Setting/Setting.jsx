import "./Setting.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "/configs/api";
import SettingForm from "../../components/SettingForm/SettingForm";
import SetGoalForm from "../../components/SetGoalForm/SetGoalForm";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";

const Setting = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    const response = await api.get("user/me");
    setUser(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const signOut = () => {
    const text = "Are you sure you want to sign out?";
    if (confirm(text) == true) {
      api.post("auth/signout").then(() => {
        alert("Have a Good Day!");
        navigate("/");
      });
    }
  };
  
  return (
    <div className="setting">
      <h1>Setting</h1>
    <div className="container">
      {user.username && (
        <>
          <SettingForm user={user} />
          <SetGoalForm user={user} isUpdate={true} />
        </>
      )}
    </div>
    <a onClick={signOut}>Sign out</a>
  </div>
  );
};

export default Setting;