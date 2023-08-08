import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { getUserRole } from "./ApiRequest";
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = auth?.currentUser;
    if (user === null) return;

    const loggedInUser = await currentUser(user.providerData[0]);
    return loggedInUser;
  } catch (err) {
    console.log(err);
  }
};

export const logOutUser = async () => {
  try {
    await signOut(auth, googleProvider);

    localStorage.removeItem("token");
    return { isLoggedIn: false };
  } catch (err) {
    console.log(err);
  }
};

export const setJwtToken = async () => {
  const idToken = await auth?.currentUser?.getIdToken(true);
  localStorage.setItem("token", idToken);
};

const currentUser = async (user) => {
  const { displayName, email, photoURL } = user;
  const isAdmin = await getUserRole(email);

  const userInfo = {
    isLoggedIn: true,
    name: displayName,
    email: email,
    photo: photoURL,
    isAdmin,
    error: "",
  };

  return userInfo;
};
