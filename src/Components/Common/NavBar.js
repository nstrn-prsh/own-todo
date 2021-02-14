import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
     return (
          <Navbar bg='light' variant='light' style={{marginBottom: '20px'}}>
               <Navbar.Brand href='#home'>HOME</Navbar.Brand>
               <Nav className='mr-auto'>
                    <Nav.Link href='#home'>WEATHER</Nav.Link>
                    <Nav.Link href='#features'>ABOUT ME</Nav.Link>
               </Nav>
               <Button variant='outline-primary'>theme</Button>
          </Navbar>
     );
};

export default NavBar;
