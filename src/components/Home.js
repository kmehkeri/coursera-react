import React from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import Loading from './Loading';
import { baseUrl } from '../shared/env';

const RenderCard = ({item, isLoading, errorMessage}) => {
    const content = () => {
        if (isLoading) {
            return(<Loading />);
        }
        else if (errorMessage) {
            return(<h4>{errorMessage}</h4>);
        }
        else if (item != null) {
            return (
                <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                    <Card>
                        <CardImg src={baseUrl + '/' + item.image} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            );
        }
    }

    return (
        <Col md="4" className="mb-1">
            {content()}
        </Col>
    );
}

const Home = (props) =>
    <Container>
        <Row>
            <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
        </Row>
        <Row>
            <RenderCard item={props.dish} isLoading={props.dishesLoading} errorMessage={props.dishesErrorMessage} />
            <RenderCard item={props.promotion} isLoading={props.promosLoading} errorMessage={props.promosErrorMessage} />
            <RenderCard item={props.leader} />
        </Row>
    </Container>

export default Home;
