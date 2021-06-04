import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
// 两个已经做好的模块
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
// 完整的dish信息模块 ..意思是往上走一步
import { DISHES } from '../shared/dishes';

// 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// 
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    // state也是从component继承过来的东西，用于储存属性
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }


  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    
    return (

      <div>
        <Header />
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        {/* <Route path='/home' component={HomePage} /> */}
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />              
              <Redirect to="/home" />
          </Switch>

        <Footer />



  
      </div>
    );
  }
}

export default Main;