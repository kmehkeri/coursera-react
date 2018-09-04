import React from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';

const Footer = (props) => 
    <Navbar dark color="secondary" className="mt-4">
        <Container className="text-white">
            <Row>
                <Col>
                    <small>© Copyright 2018 Cthulhu Restaurant</small>
                </Col>
            </Row>
        </Container>
    </Navbar>

export default Footer;
