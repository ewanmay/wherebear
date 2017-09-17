import * as React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class NavBar extends React.Component<{}, {}> {
    render() {
        return(
            <Navbar>
            <Navbar.Header>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/#/home">home</NavItem>
              <NavItem eventKey={2} href="/#/about">about</NavItem>
            </Nav>
          </Navbar>
        );
    }
}

export default NavBar;