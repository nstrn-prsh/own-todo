import React, { useContext } from "react";
import ToDo from "./../List/ToDo";
import { AuthContext } from "./../../Container/ContextApi/AuthContext";
import IsAuth from "./../Authenticate/IsAuth";

const Card = () => {
     const { isAuth } = useContext(AuthContext);

     return (
          <div className='card shadow gradient'>
               {isAuth ? <ToDo /> : <IsAuth />}
          </div>
     );
};

export default Card;
