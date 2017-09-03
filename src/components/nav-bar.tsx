import * as React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'

class NavBar extends React.Component<{}, {}>{
    render() {
        return(
            <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/#/home">Where's Bear?</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/#/home">Home</NavItem>
              <NavItem eventKey={2} href="/#/about">About</NavItem>
            </Nav>
          </Navbar>
        );
    }
}

export default NavBar 