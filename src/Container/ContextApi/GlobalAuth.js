import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const GlobalAuth = (props) => {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     const loginHandler = () => {
          setIsLoggedIn(true);
     };

     return (
          <AuthContext.Provider
               value={{
                    isAuth: isLoggedIn,
                    loginHandler:loginHandler,
               }}
          >
               {props.children}
          </AuthContext.Provider>
     );
};

export default GlobalAuth;
