import React, { Component, Fragment } from "react";
import GlobalTheme from "./ContextApi/GlobalTheme";
import ThemeLayout from "./../Components/UI/ThemeLayout";
import GlobalAuth from "./ContextApi/GlobalAuth";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

class MainLayout extends Component {
     render() {
          return (
               <Fragment>
                    {/* react router */}
                    <Router>
                         {/* context api for theme  */}
                         <GlobalTheme>
                              {/* login info */}
                              <GlobalAuth>
                                   {/* day/night theme */}
                                   <ThemeLayout>
                                        {/* main component */}
                                        <App />
                                   </ThemeLayout>
                              </GlobalAuth>
                         </GlobalTheme>
                    </Router>
               </Fragment>
          );
     }
}

export default MainLayout;
