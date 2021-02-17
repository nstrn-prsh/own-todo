import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { ThemeContext } from "./../../Container/ContextApi/ThemeContext";
import { NavLink, withRouter } from "react-router-dom";
import BtnTheme from "./../UI/BtnTheme";
import fire from "./../../Services/fire";

const NavBar = () => {
     const { mode } = useContext(ThemeContext);

     //  log out
     const logoutHandler = () => {
          fire.auth().signOut();
     };

     const colour =
          mode === "day"
               ? { color: "#002e4e", marginRight: "15px" }
               : { color: "#76b9bf", marginRight: "15px" };
     const activeColour =
          mode === "day"
               ? { color: "#e56a77", marginRight: "15px" }
               : { color: "#edc951", marginRight: "15px" };

     return (
          <Navbar style={{ margin: "0px 35px " }}>
               <Nav className='mr-auto'>
                    <Nav.Link>
                         <NavLink
                              to='/'
                              exact
                              style={colour}
                              activeStyle={activeColour}
                         >
                              HOME
                         </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                         <NavLink
                              to='/weather'
                              style={colour}
                              activeStyle={activeColour}
                         >
                              WEATHER
                         </NavLink>
                    </Nav.Link>
                    <Button variant='outline-secondary' onClick={logoutHandler}>
                         Log out
                    </Button>
               </Nav>
               <BtnTheme />
          </Navbar>
     );
};

export default withRouter(NavBar);
