import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <Container>
            <NavbarBrand href="/">Cthulhu Restaurant</NavbarBrand>
          </Container>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
