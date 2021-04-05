import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <NavbarBrand href="/">ACCS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/userportal">User Portal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://collegegrad.com/careers/all">Resources</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Students
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                      <Link className="list-group-item list-group-item-action" tag="a" to="/tenthstudents" action>Students(9-10the class)</Link>
                  
                </DropdownItem>
                <DropdownItem>
                <Link className="list-group-item list-group-item-action" tag="a" to="/twelthstudents" action>Students(11-12th class)</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                      General Information
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