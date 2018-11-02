import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col, Media, Row } from 'reactstrap'; 
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import Loading from './Loading';
import { baseUrl } from '../shared/env';

const Leader = ({leader}) =>
    <Media className="mb-4">
        <Media left href="#" className="mr-3">
            <Media object src={baseUrl + '/' + leader.image} alt="Generic placeholder image" />
        </Media>
        <Media body>
            <Media heading>{leader.name}</Media>
            <Media heading><span className="small text-muted">{leader.designation}</span></Media>
            <p>{leader.description}</p>
        </Media>
    </Media>

const Leadership = ({leaders}) => {
    if (leaders.isLoading) {
        return (
            <Loading />
        );
    }
    else if (leaders.errorMessage != null) {
        return (
            <p>{leaders.errorMessage}</p>
        );
    }
    else if (leaders.leaders != null) {
        return (
            <Stagger in>
                {leaders.leaders.map((leader) =>
                    <Fade in key={leader.id}>
                        <Leader leader={leader} />
                    </Fade>
                )}
            </Stagger>
        )
    }
}

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
                <Leadership leaders={leaders} />
            </Col>
        </Row>
    </Container>

export default About;