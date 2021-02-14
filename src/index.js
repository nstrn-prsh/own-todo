import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import ThemeLayout from "./Components/UI/ThemeLayout";

render(
     <ThemeLayout>
          <App />
     </ThemeLayout>,
     document.querySelector("#root")
);
