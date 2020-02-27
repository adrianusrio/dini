import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import {NavLink as RRNavLink } from "react-router-dom";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar dark expand="md" className="px-5 fixed-top" style = {{ backgroundColor: '#349896', borderColor: '#349896' }}>
            <NavbarBrand to="/" tag={RRNavLink}>
                <img
                    src={require('../../images/logo-dini.png')}
                    width="100px"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-5" navbar>
                <NavItem>
                    <NavLink to="/golden-age" className="text-white px-3" tag={RRNavLink}>
                        <b>Golden Age</b>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/speech-delay" className="text-white px-3" tag={RRNavLink}>  
                        <b>Speech Delay</b>
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-5" navbar>
                <NavItem>
                    <NavLink href="#" className="text-white px-3 d-none d-sm-none d-md-block d-lg-block" >
                        <i className="fa fa-phone fa-lg mr-2" aria-hidden="true"></i> 0813-8658-3800
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="text-white d-none d-sm-none d-md-block d-lg-block" >
                        <i className="fa fa-instagram fa-lg mr-2" aria-hidden="true"></i>
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    );
}
