import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import DishDetail from './DishDetail';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Col key={dish.id} md="5" className="m-1">
                    <Card onClick={() => this.onDishSelect(dish)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Col>
            );
        });

        return (
            <Container>
                <Row>
                    {menu}
                </Row>
                <DishDetail dish={this.state.selectedDish} />
            </Container>
        );
    }
}

export default Menu;
