import React from "react";
import NavBar from "./../Components/Common/NavBar";
import { Route, Switch } from "react-router-dom";
import Weather from "./../Components/Forecast/Weather";
import Card from './../Components/Common/Card';

class App extends React.Component {
     render() {
          return (
               <div style={{ textAlign: "center" }}>
                    <NavBar />
                    <Switch>
                         <Route path='/' exact component={Card} />
                         <Route path='/weather' exact component={Weather} />
                    </Switch>
               </div>
          );
     }
}

export default App;
