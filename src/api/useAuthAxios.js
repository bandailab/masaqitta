import { authAxios } from "../api/axios"
import { useContext, useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { AuthContext } from "../api/Auth";

const useAuthAxios = () => {
  const refresh = useRefreshToken();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const requestIntercept = authAxios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = authAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
          return authAxios(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () =>{
      authAxios.interceptors.request.eject(requestIntercept);
      authAxios.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return authAxios;
}

export default useAuthAxios;
