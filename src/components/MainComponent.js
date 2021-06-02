import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
// 两个已经做好的模块
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
// 完整的dish信息模块 ..意思是往上走一步
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    // state也是从component继承过来的东西，用于储存属性
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        {/* filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。  */}
        {/* 全等运算符 (===) 会检查它的两个操作数是否相等，并且返回一个布尔值结果。与相等运算符不同，全等运算符总是认为不同类型的操作数是不同的。 */}
        {/* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;