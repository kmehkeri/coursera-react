import React, { Component, Fragment } from 'react';
import { Col, Container, Jumbotron, Navbar, NavbarBrand, Row } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navbar dark color="primary">
                    <Container>
                        <NavbarBrand href="/">Cthulhu Restaurant</NavbarBrand>
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
