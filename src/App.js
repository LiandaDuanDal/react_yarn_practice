import React, {Component} from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
// import menu content
// ==============================
import Menu from './components/MenuComponent';
import {DISHED, DISHES} from './shared/dishes';
// 
import Main from './components/MainComponent';

class App extends Component {
//   constructor(props){
//       super(props);
// // app类的属性是整个大菜谱
//       this.state = {
//         dishes: DISHES
//       };
//   }
// Assignment 1
//   render() {
//     return (
//       <div className="App">
//        {/*Navbar item */}
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         {/* 这里将整个大菜谱传送给Menu进行渲染 */}
// {/* after the menu bar */}
//         <Menu dishes = {this.state.dishes}/>
//       </div>
//     );
//   }

// practice 2 before assignment 2
render() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}


}


export default App;
