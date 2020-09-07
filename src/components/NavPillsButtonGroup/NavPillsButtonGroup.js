import React from 'react';
import { ButtonGroup, Nav, NavItem } from 'reactstrap';

const NavPillsButtonGroup = (props) => {
  return (
    <Nav pills {...props}>
      <NavItem>
        <ButtonGroup size={props.size}>{props.children}</ButtonGroup>
      </NavItem>
    </Nav>
  );
};

export default NavPillsButtonGroup;
