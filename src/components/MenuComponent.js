// import React, { Component } from 'react';
// // import { Media } from 'reactstrap';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody,
//   CardTitle } from 'reactstrap';

// //导入dishinfo
// // import DishDetailo from './DishdetailComponent.js';

// // 新建menu类继承自componeng
// class Menu extends Component {

//     constructor(props) {
//         super(props);
// //used to store some property of the component
// // javascript 快速定义对象的方式
// // 类对象state  属性 selecedDish 值为null

// // 此时这个state是固化在Menu内部的，有一个自定义的属性selectedDish: null
// // 通过this.setState({ selectedDish: dish});可以设置这个state（间接)
//         this.state = {
//             selectedDish: null
//         };
//         console.log('Menu component constructed');
//     }

//     // onDishSelect(dish) {
//     //     this.setState({ selectedDish: dish});
//     // }
// // 实现renderDush方法传入dish应该，一道菜
//     // renderDish(dish) {
//     //     if (dish != null)
//     //         return(
//     //             <Card>
//     //                 <CardImg top src={dish.image} alt={dish.name} />
//     //                 <CardBody>
//     //                   <CardTitle>{dish.name}</CardTitle>
//     //                   <CardText>{dish.description}</CardText>
//     //                 </CardBody>
//     //             </Card>
//     //         );
//     //     else
//     //         return(
//     //             <div></div>
//     //         );
//     // }


//     // 


//   // onDishSelect(dish) {
//   //   // setState()是从componet继承过来的
//   //   // 传进去的参数是{键:值}
//   //   this.setState({ selectedDish: dish});
//   // }

// // redercomment渲染评论
//   // renderDish_comment(dish) {
//   //     if (dish != null)
//   //         return(
//   //             <Card>
//   //                 {/* <CardImg top src={dish.image} alt={dish.name} /> */}
//   //                 <CardBody>
//   //                   <CardTitle>{dish.name}</CardTitle>
//   //                   <CardText>{dish.description}</CardText>
//   //                 </CardBody>
//   //             </Card>
//   //         );
//   //     else
//   //         return(
//   //             <div></div>
//   //         );
//   // }

//     render() {
//       // make the menu code short
//       // 指定每一个card的渲染方式
//       // 并使用map执行遍历--单次遍历渲染一次所有元素
//       // props也是component的属性

//       // 当一个dish从app.js扔给Menu，用this.props来读取这个属性
//       // 当声明这个menu继承自componet这个类的时候，它的底层就自动有了prop。
//       // 这里面储存了所有传给他的参数。
//       // 这个dishes是跟着Main里面的dishes走的
//         const menu = this.props.dishes.map((dish) => {
//           // 这种()=>的函数写法不用声明函数名，直接往括号里方参数
//           // 用了一次就不用了
//             return (
//               // render the menu
//               <div  className="col-12 col-md-5 m-1">
//                 {/* 这里指定了一个card对应了这个dish的id */}
//                 <Card key={dish.id}
//                         onClick={() => this.props.onClick(dish.id)}>
//                   <CardImg width="100%" src={dish.image} alt={dish.name} />
//                   <CardImgOverlay>
//                       <CardTitle>{dish.name}</CardTitle>
//                   </CardImgOverlay>
//                 </Card>
//               </div>
//             );
//         });

//         return (
//           // 所有小的菜谱单元包含在container里面
//             <div className="container">

//                 <div className="row">
//                   {/* 先渲染上述的基础菜单 */}
//                     {menu}
//                 </div>
//                 {/* 这个MenuComponent里面的selectDish本来是null */}
//                 {/* 但是一旦调用了onclick方法，这个selectDish就有了card对应的dish */}
//                 {/* 于是DishDetailo就可以利用这个dish */}
//                 {/* 点击动作发生，读取当前state对应的dish值 */}
//               {/* <DishDetailo dish={this.state.selectedDish} /> */}
//             </div>
//         );
//     }
// }
// // The state object is where you store property values that belongs to the component.

// // When the state object changes, the component re-renders.
// // export the compunnet from the file
// export default Menu;

import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';

// 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// 

    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card
                onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;