import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Col, Row } from 'reactstrap';

const MenuItem = ({dish, onClick}) =>
    <Col md="5" className="m-1">
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    </Col>

const Menu = ({dishes, onClick}) =>
    <Row>
        {dishes.map((dish) =>
            <MenuItem key={dish.id} dish={dish} onClick={onClick} />
        )}
    </Row>

export default Menu;
