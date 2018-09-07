import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const RenderCard = ({item}) =>
    <Col md="4" className="mb-1">
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    </Col>

const Home = (props) =>
    <Container>
        <Row>
            <RenderCard item={props.dish} />
            <RenderCard item={props.promotion} />
            <RenderCard item={props.leader} />
        </Row>
    </Container>

export default Home;
