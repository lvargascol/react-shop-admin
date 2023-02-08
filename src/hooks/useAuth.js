import React, {useState , useContext, createContext } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import endPoints from "@services/api";

const AuthContext = createContext();

export function ProviderAuth({children}) {
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;

};

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProviderAuth() {
    const [user, setUser] = useState(null);



    

    const signIn = async (email, password) => {
      const options = {
        headers: {
          accept: '*/*',
          'content-type': 'application/json',
        },
      };
      const { data } = await axios.post(endPoints.auth.login, { email, password }, options);
      if (data.access_token) {
        Cookie.set('token', data.access_token, { expires: 5 });
      }
    };

    return {
      user,
      signIn,
    };
};