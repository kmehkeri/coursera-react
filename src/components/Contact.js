import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col, Row } from 'reactstrap'; 
import { Link } from 'react-router-dom';

function Contact(props) {
    return(
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <Row>
                <Col xs="12">
                    <h3>Location Information</h3>
                </Col>
                <Col sm={{size: 4, offset: 1}}>
                        <h5>Our Address</h5>
                        <address>
                            121, Dark Pollution Bay Road<br />
                            Temple of Doom, Arkham<br />
                            SOMEWHERE<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">contact@cthulhurestaurant.net</a>
                        </address>
                </Col>
                <Col sm={{size: 6, offset: 1}}>
                    <h5>Map of our Location</h5>
                </Col>
                <Col sm={{size: 11, offset: 1}}>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:contact@cthulhurestaurant.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;