import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
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
                <Header />
                <Container>
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                    <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default Main;
