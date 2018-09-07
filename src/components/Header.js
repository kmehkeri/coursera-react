import React, { Component, Fragment } from 'react';
import { Col, Collapse, Container, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

    render() {
        return (
            <Fragment>
                <Navbar dark expand="md" color="primary">
                    <Container>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">Cthulhu Restaurant</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <span className="fa fa-info fa-lg"></span> About us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-address-card fa-lg"></span> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col sm="6">
                                <h1>Cthulhu Restaurant</h1>
                                <p>Cthulhu ftaghn! We eat blood and meat! Prepare for the feast!</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Fragment>
        );
    }
}

export default Header;
