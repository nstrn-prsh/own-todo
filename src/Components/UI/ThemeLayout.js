import React from "react";
import useNightMode from "./NightMode";

const ThemeLayout = (props) => {
     const [mode, toggleMode] = useNightMode();

     return (
          <div className='allTime'>
               <div className={mode === "day" ? "dayTime" : "nightTime"}>
                    {props.children}
               </div>
               <button type='button' onClick={toggleMode}>
                    تغییر تم
               </button>
          </div>
     );
};

export default ThemeLayout;
