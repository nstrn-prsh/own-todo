import { useState, useEffect } from "react";

// custom hook
const useNightMode = () => {
     // note: to localStorage be sorate string zakhire mishe
     const [mode, setMode] = useState("day");

     const toggleMode = () => {
          if (mode === "day") {
               window.localStorage.setItem("mode", "night");
               setMode("night");
          } else {
               window.localStorage.setItem("mode", "day");
               setMode("day");
          }
     };

     /*  check shodane theme ba ejraye barname
        ke ba harbar refresh taghiir nakone*/
     useEffect(() => {
          const currentMode = window.localStorage.getItem("mode");
          if (currentMode) setMode(currentMode);
     }, []);

     return [mode, toggleMode];
};

export default useNightMode;
