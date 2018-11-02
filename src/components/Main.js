import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, fetchComments } from '../redux/comments';
import { fetchDishes } from '../redux/dishes';
import { fetchPromos } from '../redux/promotions';
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
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
})

class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchPromos();
        this.props.fetchComments();
    }

    render() {
        const featured = (items) => items.filter((i) => i.featured )[0]

        const HomeRoute = () => <Home dish={featured(this.props.dishes.dishes)}
                                      dishesLoading={this.props.dishes.isLoading}
                                      dishesErrorMessage={this.props.dishes.errorMessage}
                                      promotion={featured(this.props.promotions.promotions)}
                                      promosLoading={this.props.promotions.isLoading}
                                      promosErrorMessage={this.props.promotions.errorMessage}
                                      leader={featured(this.props.leaders)} />
        const MenuRoute = () => <Menu dishes={this.props.dishes} />
        const DishRoute = ({match}) =>
            <Dish dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                  dishesLoading={this.props.dishes.isLoading}
                  dishesErrorMessage={this.props.dishes.errorMessage}
                  comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                  commentsLoading={this.props.comments.isLoading}
                  commentsErrorMessage={this.props.comments.errorMessage}
                  postComment={this.props.postComment} />
        const AboutRoute = () => <About leaders={this.props.leaders} />
        const ContactRoute = () => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />

        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={HomeRoute} />
                    <Route exact path="/menu" component={MenuRoute} />
                    <Route path="/menu/:dishId" component={DishRoute}/>
                    <Route exact path="/about" component={AboutRoute} />
                    <Route exact path="/contact" component={ContactRoute} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));