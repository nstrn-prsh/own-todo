import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "./../../Container/ContextApi/ThemeContext";

const BtnTheme = () => {
     const { mode, toggleMode } = useContext(ThemeContext);

     return (
          <Button
               type='button'
               style={
                    mode === "day"
                         ? { backgroundColor: "#002e4e" }
                         : { backgroundColor: "#76b9bf" }
               }
               onClick={toggleMode}
          >
               {mode === "day" ? <span>dark</span> : <span>light</span>}
          </Button>
     );
};

export default BtnTheme;
