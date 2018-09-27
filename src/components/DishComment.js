import React, { Component, Fragment } from 'react';
import { Button, Col, FormGroup, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { required, minLength, maxLength, messages } from '../shared/validations';

class DishComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDishCommentOpen: false
        }
    }

    toggleDishComment = () => {
        this.setState({ isDishCommentOpen: !this.state.isDishCommentOpen });
    }

    handleSubmit = (values) => {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <Fragment>
                <Modal isOpen={this.state.isDishCommentOpen}>
                    <ModalHeader toggle={this.toggleDishComment}>
                        Write a comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="rating" xs="12">Rating</Label>
                                <Col xs="12" className="d-flex justify-content-between" style={{color: "gold"}}>
                                    <span>
                                        <Control.radio model=".rating" id="rating-1" name="rating" value="1" className="mr-1" validators={{ required  }}/>
                                        <span className="fa fa-star"></span>
                                    </span>
                                    <span>
                                        <Control.radio model=".rating" id="rating-2" name="rating" value="2" className="mr-1" validators={{ required  }} />
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </span>
                                    <span>
                                        <Control.radio model=".rating" id="rating-3" name="rating" value="3" className="mr-1" validators={{ required  }} />
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </span>
                                    <span>
                                        <Control.radio model=".rating" id="rating-4"  name="rating" value="4" className="mr-1" validators={{ required  }} />
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </span>
                                    <span>
                                        <Control.radio model=".rating" id="rating-5" name="rating" value="5" className="mr-1" validators={{ required  }} />
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </span>
                                </Col>
                                <Errors className="col-12 text-danger" model=".rating" show="touched"
                                        messages={messages} />
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="author" xs="12">Your name</Label>
                                <Col xs="12">
                                    <Control.text className="form-control" model=".author" id="author" name="author"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(20) }} />
                                    <Errors className="text-danger" model=".author" show="touched"
                                        messages={messages} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="comment" xs="12">Your comment</Label>
                                <Col xs="12">
                                    <Control.textarea rows="8" className="form-control" model=".comment" id="comment" name="comment"
                                        validators={{ required, minLength: minLength(5) }} />
                                    <Errors className="text-danger" model=".comment" show="touched"
                                        messages={messages} />
                                </Col>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Comment</Button>
                            <Button className="float-right" color="secondary" onClick={this.toggleDishComment}>Close</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
    
                <Button color="primary" onClick={this.toggleDishComment}>
                    <span className="fa fa-edit fa-lg"></span> Comment
                </Button>
            </Fragment>
        );
    }
}

export default DishComment;