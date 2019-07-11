import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Button, Navbar, Nav,Form, FormControl, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';





class Header extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Nav className="justify-content-end">
                        <Navbar.Brand href="#theJob">מה העבודה</Navbar.Brand>
                        <Nav.Link href="#about">מי אנחנו</Nav.Link>
                        <Nav.Link href="#whare">איפה עובדים</Nav.Link>
                        <Nav.Link href="#call_us">יצירת קשר</Nav.Link>
                    </Nav>

                </Navbar>


                {/* <Nav className="justify-content-end">
                        <Nav.Link href="#call_us">יצירת קשר</Nav.Link>                  
                        <Nav.Link href="#about">מי אנחנו</Nav.Link>
                        <Nav.Link href="#whare">איפה עובדים</Nav.Link>
                </Nav> */}

            </div>
        );
    }
}

export default Header