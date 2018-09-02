import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Row } from 'reactstrap';

class DishDetail extends Component {

    render() {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                const commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)));
                return (
                    <blockquote key={comment.id} className="blockquote">
                        <span className="small">{comment.comment}</span>
                        <span className="blockquote-footer">{comment.author}, <cite>{commentDate}</cite></span>
                    </blockquote>
                );
            });

            return (
                <Row>
                    <Col md="5" className="m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="5" className="m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>Comments</CardTitle>
                                <CardText tag="div">{comments}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            );
            
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;
