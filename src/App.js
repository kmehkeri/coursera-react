import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <Container>
            <NavbarBrand href="/">Cthulhu Restaurant</NavbarBrand>
          </Container>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
