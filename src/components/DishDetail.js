import React, { Fragment } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Row } from 'reactstrap';

const Comment = ({comment}) => {
    const commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)));
    return (
        <blockquote className="blockquote">
            <span className="small">{comment.comment}</span>
            <span className="blockquote-footer">{comment.author}, <cite>{commentDate}</cite></span>
        </blockquote>
    );
}

const DishDetail = ({dish}) => {
    if (dish != null) {
        return (
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
                                {dish.comments.map((comment) =>
                                    <Comment key={comment.id} comment={comment} />
                                )}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
        
    } else {
        return (
            <Fragment></Fragment>
        );
    }
}

export default DishDetail;
