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
        .get(`/users/data`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setCurrentUser({ loggedIn: true, role: res.data.data.role });
        })
        .catch((err) => {
          console.log(err);
          setCurrentUser({ loggedIn: false });
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
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
