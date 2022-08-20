import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ loggedIn: false });

  useEffect(() => {
    if (localStorage.getItem("PWA_LMS_AT")) {
      setLoading(true);
      axios
        .get(`/users/data`)
        .then((res) => {
          setCurrentUser({ loggedIn: true, role: res.data.data.role });
        })
        .catch((err) => {
          if (err.response?.status === 401) {
            localStorage.removeItem("PWA_LMS_AT");
          }
          setCurrentUser({ loggedIn: false });
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  function signOut() {
    setCurrentUser({ loggedIn: false });
    localStorage.removeItem("PWA_LMS_AT");
  }

  function getRole() {
    return currentUser.role;
  }

  function isAuthorized() {
    if (!currentUser.loggedIn) {
      return false;
    }

    return true;
  }

  const value = {
    signOut,
    getRole,
    isAuthorized,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
