import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({ loggedIn: false });
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["PWA_LMS_AT", "PWA_LMS_RT"]);

  useEffect(() => {
    if (cookies.PWA_LMS_RT) {
      setLoading(true);
      axios
        .get(`/users/data`, {
          headers: {
            "content-Type": "application/json",
            Accept: "/",
            "Cache-Control": "no-cache",
            Cookie: document.cookie,
          },
          credentials: "same-origin",
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setCurrentUser({ loggedIn: false });
        })
        .finally(() => setLoading(false));
    }
  }, [cookies.PWA_LMS_RT]);

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

export default function useAuthentication() {
  return useContext(AuthContext);
}
