import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dish from './Dish';
import Header from './Header';
import Footer from './Footer';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            comments: COMMENTS
        }
    }

    render() {
        const featured = (items) => items.filter((i) => i.featured )[0]

        const HomeRoute = () => <Home dish={featured(this.state.dishes)} promotion={featured(this.state.promotions)} leader={featured(this.state.leaders)} />
        const MenuRoute = () => <Menu dishes={this.state.dishes} />
        const DishRoute = ({match}) =>
            <Dish dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))} />
        const AboutRoute = () => <About leaders={this.state.leaders} />

        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path="/home" component={HomeRoute} />
                        <Route exact path="/menu" component={MenuRoute} />
                        <Route path="/menu/:dishId" component={DishRoute}/>
                        <Route exact path="/about" component={AboutRoute} />
                        <Route exact path="/contact" component={Contact} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;