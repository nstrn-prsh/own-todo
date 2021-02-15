import React from "react";
import { ThemeContext } from "./ThemeContext";
import useNightMode from './../../Components/UI/NightMode';

const GlobalTheme = (props) => {
     const [mode, toggleMode] = useNightMode();

     return (
          <ThemeContext.Provider
               value={{
                    mode,
                    toggleMode,
               }}
          >
               {props.children}
          </ThemeContext.Provider>
     );
};

export default GlobalTheme;
