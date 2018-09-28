import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle, Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import DishComment from './DishComment';
import Loading from './Loading';

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
                        <Card>
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="5" className="m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>Comments</CardTitle>
                                <CardText tag="div">
                                    {props.comments.map((comment) =>
                                        <Comment key={comment.id} comment={comment} />
                                    )}
                                    <DishComment addComment={props.addComment} dishId={props.dish.id} />
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
