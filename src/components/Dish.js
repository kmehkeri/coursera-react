import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle, Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Comment = ({comment}) => {
    const commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)));
    return (
        <blockquote className="blockquote">
            <span className="small">{comment.comment}</span>
            <span className="blockquote-footer">{comment.author}, <cite>{commentDate}</cite></span>
        </blockquote>
    );
}

const Dish = ({dish, comments}) =>
    <Container>
        <Row>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
            </Breadcrumb>
        </Row>
        <Row>
            <Col md="5" className="m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md="5" className="m-1">
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText tag="div">
                            {comments.map((comment) =>
                                <Comment key={comment.id} comment={comment} />
                            )}
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>

export default Dish;