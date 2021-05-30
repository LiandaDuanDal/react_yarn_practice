import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

//导入dishinfo
import DishDetail_info from './DishdetailComponent.js';

// 新建menu类继承自componeng
class Menu extends Component {

    constructor(props) {
        super(props);
//used to store some property of the component
// javascript 快速定义对象的方式
// 类对象state  属性 selecedDish 值为null

// 此时这个state是固化在Menu内部的，有一个自定义的属性selectedDish: null
// 通过this.setState({ selectedDish: dish});可以设置这个state（间接)
        this.state = {
            selectedDish: null
        };
        console.log('Menu component constructed');
    }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish});
    // }
// 实现renderDush方法传入dish应该，一道菜
    // renderDish(dish) {
    //     if (dish != null)
    //         return(
    //             <Card>
    //                 <CardImg top src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                   <CardTitle>{dish.name}</CardTitle>
    //                   <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     else
    //         return(
    //             <div></div>
    //         );
    // }


    // 
  onDishSelect(dish) {
    // setState是从componet继承过来的
    this.setState({ selectedDish: dish});
  }
// redercomment渲染评论
  // renderDish_comment(dish) {
  //     if (dish != null)
  //         return(
  //             <Card>
  //                 {/* <CardImg top src={dish.image} alt={dish.name} /> */}
  //                 <CardBody>
  //                   <CardTitle>{dish.name}</CardTitle>
  //                   <CardText>{dish.description}</CardText>
  //                 </CardBody>
  //             </Card>
  //         );
  //     else
  //         return(
  //             <div></div>
  //         );
  // }

    render() {
      // make the menu code short
      // 指定每一个card的渲染方式
      // 并使用map执行遍历
      // props也是component的属性
        const menu = this.props.dishes.map((dish) => {
            return (
              // render the menu
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                // define the click antion
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">

                <div className="row">
                    {menu}
                </div>
                {/* 这个MenuComponent里面的selectDish本来是null */}
                {/* 但是一旦调用了onclick方法，这个selectDish就有了card对应的dish */}
                {/* 于是DishDetail_info就可以利用这个dish */}
              <DishDetail_info dish={this.state.selectedDish} />
            </div>
        );
    }
}
// export the compunnet from the file
export default Menu;