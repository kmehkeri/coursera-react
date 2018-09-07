import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }

    render() {
        const HomePage = () => <Home />
        const MenuPage = () => <Menu dishes={this.state.dishes} />

        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={MenuPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

export default Main;
