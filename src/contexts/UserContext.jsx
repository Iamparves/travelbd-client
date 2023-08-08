import jwt_decode from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserRole } from "../utils/ApiRequest";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false });
  const token = localStorage.getItem("token");

  const getDecodedToken = () => {
    try {
      return jwt_decode(token);
    } catch (err) {
      localStorage.setItem("token", "");
      return console.log(err);
    }
  };

  const currentUser = async (user) => {
    const { name, email, picture } = user;
    const isAdmin = await getUserRole(email);

    const userInfo = {
      isLoggedIn: true,
      name: name,
      email: email,
      photo: picture,
      isAdmin: isAdmin,
      error: "",
    };

    setUser(userInfo);
  };

  useEffect(() => {
    if (!user.isLoggedIn && token) {
      const decodedUser = getDecodedToken();
      if (decodedUser) currentUser(decodedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

export default UserContextProvider;
