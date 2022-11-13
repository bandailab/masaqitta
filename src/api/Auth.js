import React, { createContext, useState } from "react";

export const AuthContext = createContext({});
const token = localStorage.getItem("token")

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({accessToken: token});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
