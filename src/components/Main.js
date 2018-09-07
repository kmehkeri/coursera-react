import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    }

    render() {
        const featured = (items) => items.filter((i) => i.featured )[0]

        const HomePage = () => <Home dish={featured(this.state.dishes)} promotion={featured(this.state.promotions)} leader={featured(this.state.leaders)} />
        const MenuPage = () => <Menu dishes={this.state.dishes} />

        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={MenuPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

export default Main;
