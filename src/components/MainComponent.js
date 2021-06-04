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
//
import Contact from './ContactComponent';
// 
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
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
              <Route exact path='/contactus' component={Contact} />            
              <Redirect to="/home" />
          </Switch>

        <Footer />



  
      </div>
    );
  }
}

export default Main;