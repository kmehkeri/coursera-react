import React, { Component, Fragment } from 'react';
import { Button, Col, Collapse, Container, Form, FormGroup, Input, Jumbotron, Label, Modal, ModalHeader, ModalBody, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isLoginOpen: false
        }
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

    toggleLogin = () => {
        this.setState({ isLoginOpen: !this.state.isLoginOpen })
    }

    handleLogin = (event) => {
        this.toggleLogin();
        alert("Username: " + this.username.value + ", password: " + this.password.value + ", remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Modal isOpen={this.state.isLoginOpen} toggle={this.toggleLogin}>
                    <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

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
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Button color="primary" onClick={this.toggleLogin}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
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
