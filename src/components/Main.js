import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddComment } from '../redux/comments';
import { fetchDishes } from '../redux/dishes';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dish from './Dish';
import Header from './Header';
import Footer from './Footer';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(AddComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) }
})

class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const featured = (items) => items.filter((i) => i.featured )[0]

        const HomeRoute = () => <Home dish={featured(this.props.dishes.dishes)}
                                      dishesLoading={this.props.dishes.isLoading}
                                      dishesErrorMessage={this.props.dishes.errorMessage}
                                      promotion={featured(this.props.promotions)}
                                      leader={featured(this.props.leaders)} />
        const MenuRoute = () => <Menu dishes={this.props.dishes} />
        const DishRoute = ({match}) =>
            <Dish dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                  dishesLoading={this.props.dishes.isLoading}
                  dishesErrorMessage={this.props.dishes.errorMessage}
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                  addComment={this.props.addComment} />
        const AboutRoute = () => <About leaders={this.props.leaders} />

        return (
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
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));