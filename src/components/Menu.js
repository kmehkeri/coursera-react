import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';

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

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
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
                <Row>
                    {this.renderDish(this.state.selectedDish)}
                </Row>
            </Container>
        );
    }
}

export default Menu;
