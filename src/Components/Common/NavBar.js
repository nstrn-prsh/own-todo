import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { ThemeContext } from "./../../Container/ContextApi/ThemeContext";
import { NavLink, withRouter } from "react-router-dom";
import BtnTheme from "./../UI/BtnTheme";

const NavBar = () => {
     const { mode } = useContext(ThemeContext);

     const colour =
          mode === "day" ? { color: "#002e4e" } : { color: "#76b9bf" };
     const activeColour =
          mode === "day" ? { color: "#e56a77" } : { color: "#edc951" };

     return (
          <Navbar style={{ margin: "0px 30px" }}>
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
                    <Nav.Link>
                         <NavLink
                              to='/aboutMe'
                              style={colour}
                              activeStyle={activeColour}
                         >
                              ABOUT ME
                         </NavLink>
                    </Nav.Link>
               </Nav>
               <BtnTheme />
          </Navbar>
     );
};

export default withRouter(NavBar);
