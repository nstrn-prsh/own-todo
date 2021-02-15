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
                         <h1>Your day’s still empty...</h1>
                         <p>Put in some tasks and make your day!</p>
                    </div>
                    <button
                         className={
                              mode === "day"
                                   ? "add shadow plusButtonDay"
                                   : "add shadow plusButtonNight"
                         }
                         onClick={loginHandler}
                    >
                         Add
                    </button>
               </div>
          </Fragment>
     );
};

export default IsAuth;
