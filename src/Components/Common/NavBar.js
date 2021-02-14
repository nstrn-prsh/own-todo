import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import BtnTheme from "./../UI/BtnTheme";
import { ThemeContext } from "./../ContextApi/ThemeContext";

const NavBar = () => {
     const { mode } = useContext(ThemeContext);

     const colour =
          mode === "day" ? { color: "#002e4e" } : { color: "#76b9bf" };

     return (
          <Navbar >
               <Navbar.Brand href='#home' style={colour}>HOME</Navbar.Brand>
               <Nav className='mr-auto'>
                    <Nav.Link href='#home' style={colour}>WEATHER</Nav.Link>
                    <Nav.Link href='#features' style={colour}>ABOUT ME</Nav.Link>
               </Nav>
               <BtnTheme />
          </Navbar>
     );
};

export default NavBar;
