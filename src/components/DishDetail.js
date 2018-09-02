import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';

class DishDetail extends Component {

    render() {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <blockquote className="blockquote">
                        <p class="small">{comment.comment}</p>
                        <footer class="blockquote-footer">{comment.author}, <cite>{comment.date}</cite></footer>
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
                                <CardText>{comments}</CardText>
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
