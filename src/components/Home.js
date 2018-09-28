import React from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Loading from './Loading';

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
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
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
            <RenderCard item={props.promotion} />
            <RenderCard item={props.leader} />
        </Row>
    </Container>

export default Home;
