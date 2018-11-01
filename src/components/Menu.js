import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle, Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { baseUrl } from '../shared/env';

const MenuItem = ({dish}) =>
    <Col md="5" className="m-1">
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + '/' + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    </Col>

const Menu = (props) => {
    if (props.dishes.isLoading) {
        return (
            <Container><Row><Loading /></Row></Container>
        );
    }
    else if (props.dishes.errorMessage) {
        return (
            <Container><Row><p>{props.dishes.errorMessage}</p></Row></Container>
        );
    }
    else if (props.dishes.dishes !== []) {
        return (
            <Container>
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </Row>
                <Row>
                    {props.dishes.dishes.map((dish) =>
                        <MenuItem key={dish.id} dish={dish} />
                    )}
                </Row>
            </Container>
        );
    }
}

export default Menu;
