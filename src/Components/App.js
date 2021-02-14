import React from "react";
import Card from "./Common/Card";
import NavBar from "./Common/NavBar";

class App extends React.Component {
     render() {
          return (
               <div style={{ textAlign: "center" }}>
                    <NavBar />
                    <Card />
               </div>
          );
     }
}

export default App;
