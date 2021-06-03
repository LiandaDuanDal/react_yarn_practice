// import React, { Component } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

// class DishDetail extends Component{
//     constructor(props) {
//         super(props);

//         console.log(props);
        
//         // stores iproperties of this component
//         // ==============================
//          state = {
//             // selectedDishDetail_info:  props.dsdetail
//             selectedDishDetail:null
            
//         };
//         // ==============================

//         console.log(" state---Dishdetial--->", state);
//         // undefined---> props.dsdetail
//         console.log("dstail---->", props.dsdetail);

//     }

//     componentDidMount(){
//         console.log("Dishdetail componentDidMount");
//     }
//     componentDidUpdate(){
//         console.log("Dishdetail componentDidupdate");
//     }





//     //渲染菜单本身（图片+纯标题）
//      RenderDish(dish) {

//         if (dish != null) {
//             return (
//                 <div className='col-12 col-md-5 m-1'>
//                     <Card>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle> {dish.name}</CardTitle>
//                             <CardText> {dish.description} </CardText>
//                         </CardBody>
//                     </Card>
//                 </div>   
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }
// // 渲染评论
//     RenderComments(comments){
//         if (comments == null) {
//             return (<div></div>)
//         }
//         // console.alert(comments.type());
//         const cmnts = comments.map((comment) => {
//             return (
//                 <li key={comment.id} class ="text-left">
//                     <p>{comment.comment}</p>
//                     <p>-- {comment.author},
//                     &nbsp;
//                     {new Intl.DateTimeFormat('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: '2-digit'
//                     }).format(new Date(comment.date))}
//                     </p>
//                 </li>
//             )
//         })
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 <h4 class = "text-left"> Comments </h4>
//                 <ul className='list-unstyled'>
//                     {/* 此处是经过map循环返回的一系列comment */}
//                     {cmnts}
//                 </ul>

//             </div>
//         )
//     }
//     // Props are arguments passed into React components.
//     // Props are passed to components via HTML attributes.
//     // https://www.w3schools.com/react/react_state.asp
//     render(){
//         const dish =  props.dish;

//         // ==============================
//         console.log("DishdetailComponent render 被调用");
//         console.log("dish------->",dish);
//         // ==============================
//         if (dish == null) {
//             return (<div></div>);
//         }
//         // ==============================
//         const dishItem =   RenderDish(dish);
//         const dishComment =  RenderComments(dish.comments);
//         // ==============================
//         console.log("连续渲染一个菜的详细信息+评论");
//         // ==============================
//         return (
//             // 连续渲染一个菜的详细信息+评论
//             <div class = "container">
//                 <div className='row'>
//                     {dishItem}
//                     {dishComment}
//                 </div>
//             </div>
//         )
//     }

// }

// export default DishDetail;


// ================

import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


    function  RenderDish({dish}) { 
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }

    }

    function RenderComments({comments}) {
        console.log("render commnets");
        console.log("comments--->",comments);
        if (comments == null) {
            console.log("empty comment!!!");
            return (<div></div>)
        }
        // console.alert(comments.type());
        const cmnts = comments.map((comment) => {
            return (
                <li key={comment.id} class ="text-left">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        console.log("return comment");
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4 class = "text-left"> Comments </h4>
                <ul className='list-unstyled'>
                    {/* 此处是经过map循环返回的一系列comment */}
                    {cmnts}
                </ul>

            </div>
        )
      
    }

    const  DishDetail = (props) => {

        const dish =  props.dish;
        // console.log(dish);

        // ==============================
        console.log("DishdetailComponent render 被调用");
        console.log("dish------->",dish);
        // ==============================
        if (dish == null) {
            return (<div></div>);
        }
        // ==============================
        const dishItem =   RenderDish(dish);
        const dishComment =  RenderComments(dish.comments);
        // ==============================
        console.log("连续渲染一个菜的详细信息+评论");
        // ==============================
        return (
            // 连续渲染一个菜的详细信息+评论
            <div class = "container">
                <div className='row'>
                <RenderDish dish = {props.dish}/>
                <RenderComments comments = {props.dish.comments}/>

                    {/* {dishItem}
                    {dishComment} */}
                </div>
            </div>
        )
    }
      
    

export default DishDetail;