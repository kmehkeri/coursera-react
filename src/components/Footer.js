import React from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = (props) => 
    <Navbar dark color="secondary" className="mt-4">
        <Container className="text-white">
            <Row>
                <Col>
                    <small>© Copyright 2018 Cthulhu Restaurant</small>
                </Col>
                <Col>
                    <ul className="list-unstyled">
                        <li><Link to="/home" className="text-white">Home</Link></li>
                        <li><Link to="/aboutus" className="text-white">About</Link></li>
                        <li><Link to="/menu" className="text-white">Menu</Link></li>
                        <li><Link to="/contactus" className="text-white">Contact</Link></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </Navbar>

export default Footer;
