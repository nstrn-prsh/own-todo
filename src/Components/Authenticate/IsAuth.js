import React, { useContext, Fragment } from "react";
import HotAir from "./../UI/HotAir";
import { AuthContext } from "./../../Container/ContextApi/AuthContext";
import { ThemeContext } from "./../../Container/ContextApi/ThemeContext";

const IsAuth = () => {
     const { loginHandler } = useContext(AuthContext);
     const { mode } = useContext(ThemeContext);

     return (
          <Fragment>
               <HotAir />
               <div className='start'>
                    <div className='text'>
                         <h1>add, edit and sort your tasks here!</h1>
                         <p>click on enter to continue...</p>
                    </div>
                    <button
                         className={
                              mode === "day"
                                   ? "add shadow plusButtonDay"
                                   : "add shadow plusButtonNight"
                         }
                         onClick={loginHandler}
                    >
                         Enter
                    </button>
               </div>
          </Fragment>
     );
};

export default IsAuth;
