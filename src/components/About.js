import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col, Media, Row } from 'reactstrap'; 
import { Link } from 'react-router-dom';

const Leader = ({leader}) =>
    <Media className="mb-4">
        <Media left href="#" className="mr-3">
            <Media object src={leader.image} alt="Generic placeholder image" />
        </Media>
        <Media body>
            <Media heading>{leader.name}</Media>
            <Media heading><span className="small text-muted">{leader.designation}</span></Media>
            <p>{leader.description}</p>
        </Media>
    </Media>

const About = ({leaders}) =>
    <Container>
        <Row>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About</BreadcrumbItem>
            </Breadcrumb>
        </Row>
        <Row>
            <Col xs="12" md="6">
                <h3>Our history</h3>
                <p>Cthulhu cult has always been popular in Arkham. Until XVII century not many dedicated restaurants were able to feed the cultists.</p>
                <p>Our Cthulhu Restaurant founded in 1688 since its beginning has served bloodiest tastiest meat straight </p>
            </Col>
            <Col xs="12" md="6">
                <h3>Fact sheet</h3>
                <p>...</p>
            </Col>
            <Col xs="12">
                <h3>Our leadership</h3>
                {leaders.map((leader) =>
                    <Leader key={leader.id} leader={leader} />
                )}
            </Col>
        </Row>
    </Container>

export default About;