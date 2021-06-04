import React from 'react';
// import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
//
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        // const dishItem =   RenderDish(dish);
        // const dishComment =  RenderComments(dish.comments);
        // ==============================
        console.log("连续渲染一个菜的详细信息+评论");
        // ==============================
        // return (
        //     // 连续渲染一个菜的详细信息+评论
        //     <div class = "container">
        //         <div className='row'>
        //         <RenderDish dish = {props.dish}/>
        //         <RenderComments comments = {props.dish.comments}/>

        //             {/* {dishItem}
        //             {dishComment} */}
        //         </div>
        //     </div>
        // )
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {/* <div className="col-12 col-md-5 m-1"> */}
                    <RenderDish dish={props.dish} />
                {/* </div> */}
                {/* <div className="col-12 col-md-5 m-1"> */}
                    <RenderComments comments={props.comments} />
                {/* </div> */}
            </div>
            </div>
        );
    }
      
    

export default DishDetail;