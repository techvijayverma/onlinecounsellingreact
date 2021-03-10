import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
const Header=(props)=>{

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



return(
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">SOCS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/usersection/register">User Portal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Resources</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Students
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Students(9-10the class)
                </DropdownItem>
                <DropdownItem>
                  Students(11-12th class)
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus">Contact Us</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Welcome {props.user} <NavLink href="/logout">Logout</NavLink></NavbarText>
        </Collapse>
      </Navbar>
    </div>

);

}
export default Header;