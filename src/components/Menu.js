import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Col, Row } from 'reactstrap';

class Menu extends Component {
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Col key={dish.id} md="5" className="m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Col>
            );
        });

        return (
            <Row>
                {menu}
            </Row>
        );
    }
}

export default Menu;
