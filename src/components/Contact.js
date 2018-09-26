import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Container, Col, FormGroup, Label, Row } from 'reactstrap'; 
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { required, minLength, maxLength, isNumber, isValidEmail, messages } from '../shared/validations';

class Contact extends Component {
    handleSubmit = (values) => {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
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
                <Row className="mt-4">
                    <Col xs="12">
                        <h3>Send us your feedback!</h3>
                    </Col>
                    <Col xs="12" md="9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                    <Errors className="text-danger" model=".firstname" show="touched"
                                        messages={messages} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                    <Errors className="text-danger" model=".lastname" show="touched"
                                        messages={messages} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel. Number" className="form-control"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(15), isNumber }} />
                                    <Errors className="text-danger" model=".telnum" show="touched"
                                        messages={messages} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                        validators={{ required, maxLength: maxLength(100), isValidEmail }} />
                                    <Errors className="text-danger" model=".email" show="touched"
                                        messages={messages} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input" /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType">
                                        <option>Tel</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea className="form-control" model=".message" id="message" name="message" rows="12"></Control.textarea>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;