import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
// import menu content
import Menu from './components/MenuComponent';
import {DISHED, DISHES} from './shared/dishes';

class App extends Component {
  constructor(props){

      super(props);

      this.state = {
        dishes: DISHES
      };
  }

  render() {
    return (
      <div className="App">
       {/*Navbar item */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
{/* after the menu bar */}
        <Menu dishes = {this.state.dishes}/>
      </div>
    );
  }
}


export default App;
