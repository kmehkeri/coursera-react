import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col, Row } from 'reactstrap'; 
import { Link } from 'react-router-dom';

function About(props) {
    return(
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <Row>
                <Col>
                    <h3>About us</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default About;