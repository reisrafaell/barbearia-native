import React, { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";

export const AuthContex = createContext({});

const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [userName, setUser] = useState();
  const [error, setError] = useState(false);
  const [services, setServices] = useState([{}]);

  const SaveUser = async (user, password) => {
    await AsyncStorage.setItem("email", user);
    await AsyncStorage.setItem("password", password);
  };

  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setUser(value.user.uid);
        SaveUser(email, password);
        if (value.user.uid == "6IpwJSBsMdW5I9sKvuPww1Jcnmv1") {
          navigation.navigate("List");
        } else {
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        setError(true);
      });
  };
  const logout = async () => {
    await signOut(auth).then(() => {
      navigation.navigate("Main");
    });
  };

  const handleServices = (value) => {
    setServices(value);
  };

  return (
    <AuthContex.Provider
      value={{
        name: userName,
        loginUser,
        logout,
        error,
        handleServices,
        services,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
