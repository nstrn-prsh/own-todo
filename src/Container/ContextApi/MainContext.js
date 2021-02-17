import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalTheme from "./GlobalTheme";
import GlobalAuth from "./GlobalAuth";
import ThemeLayout from "./../../Components/UI/ThemeLayout";

const MainContext = (props) => {
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
                                   {props.children}
                              </ThemeLayout>
                         </GlobalAuth>
                    </GlobalTheme>
               </Router>
          </Fragment>
     );
};

export default MainContext;
