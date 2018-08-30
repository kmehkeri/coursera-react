import React, { Component } from 'react';
import { Container, Media, Row } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [{
                id: 1,
                name: 'Bloody Moon',
                category: 'drinks',
                price: '4.99',
                description: 'Bloody bloody cocktail',
                image: 'assets/images/bloody_moon.jpg'
            }, {
                id: 2,
                name: 'Fiery Pizza',
                category: 'mains',
                price: '13.99',
                description: 'Most burning pizza you have ever encountered',
                image: 'assets/images/fiery_pizza.jpg'
            }]
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <Container>
                <Row>
                    <Media list>
                        {menu}
                    </Media>
                </Row>
            </Container>
        );
    }
}

export default Menu;
