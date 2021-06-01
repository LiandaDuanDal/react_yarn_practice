import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail_info extends Component{
    constructor(props) {
        super(props);

        console.log(props);
        
        // stores iproperties of this component
        // ==============================
        this.state = {
            // selectedDishDetail_info: this.props.dsdetail
            selectedDishDetail_info:null
            
        };
        // ==============================

        console.log("this.state---Dishdetial--->",this.state);
        // undefined--->this.props.dsdetail
        console.log("dstail---->",this.props.dsdetail);

    }
    //渲染菜单本身（图片+纯标题）
    renderDish(dish) {

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
// 渲染评论
    renderComments(comments){
        if (comments == null) {
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
    // Props are arguments passed into React components.
    // Props are passed to components via HTML attributes.
    // https://www.w3schools.com/react/react_state.asp
    render(){
        const dish = this.props.dish;

        // ==============================
        console.log("DishdetailComponent render 被调用");
        console.log("dish------->",dish);
        // ==============================
        if (dish == null) {
            return (<div></div>);
        }
        // ==============================
        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);
        // ==============================
        console.log("连续渲染一个菜的详细信息+评论");
        // ==============================
        return (
            // 连续渲染一个菜的详细信息+评论
            
            <div className='row'>
                {dishItem}
                {dishComment}
            </div>
        )
    }

}

export default DishDetail_info;