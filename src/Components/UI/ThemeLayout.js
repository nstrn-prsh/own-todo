import React, { useContext } from "react";
import { ThemeContext } from './../../Container/ContextApi/ThemeContext';

const ThemeLayout = (props) => {
     const { mode } = useContext(ThemeContext);
     
     return (
               <div className={mode === "day" ? "allTime dayTime" : "allTime nightTime"}>
                    {props.children}
               </div>
     );
};

export default ThemeLayout;
