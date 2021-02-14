import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import ThemeLayout from "./Components/UI/ThemeLayout";
import GlobalTheme from "./Components/ContextApi/GlobalTheme";

render(
     <GlobalTheme>
          <ThemeLayout>
               <App />
          </ThemeLayout>
     </GlobalTheme>,
     document.querySelector("#root")
);
