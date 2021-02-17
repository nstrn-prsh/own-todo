import React, { Fragment } from "react";
import User from "./../Components/Authenticate/User";
import { ToastContainer } from "react-toastify";

class App extends React.Component {
     render() {
          return (
               <Fragment>
                    <User />
                    <ToastContainer />
               </Fragment>
          );
     }
}

export default App;
