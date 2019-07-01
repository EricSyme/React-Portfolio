import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/ESlogo.png' height="41" width="41" alt='Eric Syme -- Portfolio' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-center">
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/projects'><span className="fa fa-modx fa-lg"></span> Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/certificates'><span className="fa fa-mortar-board fa-lg"></span> Certificates</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/biography'><span className="fa fa-list fa-lg"></span> Bio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/eric-syme-660985183/"><span className="fa fa-linkedin"> LinkedIn</span></a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" target="_blank" href="https://github.com/EricSyme"><span className="fa fa-github"> GitHub</span></a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="mailto:eric.onetenbalm@gmail.com"><span className="fa fa-envelope-o"> Email</span></a>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;