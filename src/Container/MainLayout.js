import React, { Component, Fragment } from "react";
import GlobalTheme from "./ContextApi/GlobalTheme";
import ThemeLayout from "./../Components/UI/ThemeLayout";
import App from "./App";

class MainLayout extends Component {
     render() {
          return (
               <Fragment>
                    {/* context api for theme  */}
                    <GlobalTheme>
                         {/* day/night theme */}
                         <ThemeLayout>
                              {/* main component */}
                              <App />
                         </ThemeLayout>
                    </GlobalTheme>
               </Fragment>
          );
     }
}

export default MainLayout;
