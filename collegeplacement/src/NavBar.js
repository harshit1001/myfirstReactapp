import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component{
    render(){
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">College Placement Details</NavbarBrand>
           
             
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Companies</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
                  </NavItem>
               
                </Nav>
        
            </Navbar>
          </div>
        );
    }
}
export default NavBar;