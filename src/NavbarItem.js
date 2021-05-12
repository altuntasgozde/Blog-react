import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

export const NavbarItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <Container>
          <NavbarBrand className="text-white" href="/">BLOG</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
              <Link to="/" style={{textDecoration: 'none'}}>
                <NavLink className="text-white">Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link to="/entry" style={{textDecoration: 'none'}}>
                <NavLink className="text-white">
                   + New Entry
                </NavLink>
                </Link>

              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
