import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { logOutUser } from "../../../utils/LoginManager";
import "./Profile.css";

const Profile = () => {
  const { user, setUser } = useUser();
  const { name, email, photo } = user;
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser().then((res) => {
      setUser(res);
      toast.error("Logged out!");
      navigate("/");
    });
  };

  return (
    <div className="profile">
      <div className="profile__content">
        <div className="user__card">
          <img src={photo} alt={name} className="user__img" />
          <h2 className="user__name">{name}</h2>
          <h3 className="user__email">{email}</h3>
          <button className="package__btn btn__primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
