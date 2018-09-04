import React, { Component, Fragment } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import DishDetail from './DishDetail'
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {
        return (
            <Fragment>
                <Navbar dark color="primary">
                    <Container>
                        <NavbarBrand href="/">Cthulhu Restaurant</NavbarBrand>
                    </Container>
                </Navbar>
                <Container>
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                    <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </Container>
            </Fragment>
        );
    }
}

export default Main;
