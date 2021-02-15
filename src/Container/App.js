import React from "react";
import NavBar from './../Components/Common/NavBar';
import Card from './../Components/Common/Card';

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
