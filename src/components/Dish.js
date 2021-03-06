import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle, Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import DishComment from './DishComment';
import Loading from './Loading';
import { baseUrl } from '../shared/env';

const Comment = ({comment}) => {
    const commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)));
    return (
        <blockquote className="blockquote">
            <span className="small">{comment.comment}</span>
            <span className="blockquote-footer">{comment.author}, <cite>{commentDate}</cite></span>
        </blockquote>
    );
}

const Dish = (props) => {
    if (props.dishesLoading) {
        return (
            <Container>
                <Row>
                    <Loading />
                </Row>
            </Container>
        );
    }
    else if (props.dishesErrorMessage != null) {
        return (
            <Container>
                <Row>
                    <p>{props.dishesErrorMessage}</p>
                </Row>
            </Container>
        );
    }
    else if (props.dish != null) {
        return (
            <Container>
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Col md="5" className="m-1">
                        <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                            <Card>
                                <CardImg width="100%" src={baseUrl + '/' + props.dish.image} alt={props.dish.name} />
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </FadeTransform>
                    </Col>
                    <Col md="5" className="m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>Comments</CardTitle>
                                <CardText tag="div">
                                    <Stagger in>
                                        {props.comments.map((comment) =>
                                            <Fade in key={comment.id}>
                                                <Comment comment={comment} />
                                            </Fade>
                                        )}
                                    </Stagger>
                                    <DishComment postComment={props.postComment} dishId={props.dish.id} />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dish;
