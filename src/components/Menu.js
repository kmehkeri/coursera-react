import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle, Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const MenuItem = ({dish}) =>
    <Col md="5" className="m-1">
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    </Col>

const Menu = ({dishes, onClick}) =>
    <Container>
        <Row>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
        </Row>
        <Row>
            {dishes.map((dish) =>
                <MenuItem key={dish.id} dish={dish} />
            )}
        </Row>
    </Container>

export default Menu;
