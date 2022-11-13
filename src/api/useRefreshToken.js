import axios from "./axios"

import { useContext } from "react";
import { AuthContext } from "../api/Auth"

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext)

  const refresh = async () => {
    const response = await axios.get("/api/token/refresh", {
      withCredentials: true
    });

    setAuth((prev) => {
      return { ...prev, accessToken: response.data.accessToken };
    });

    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
