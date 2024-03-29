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
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//
import Contact from './ContactComponent';
// 
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
// about
import About from './AboutComponent';

// 

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}





class Main extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    // };
  }




// 
  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    };

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };


    // about 
    const AboutUsPage = () => {
      return(
          <About 
              leaders={this.state.leaders}
          />
      );
  };
    
  return (
    <div>
      <Header />
      <div>
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps)(Main));