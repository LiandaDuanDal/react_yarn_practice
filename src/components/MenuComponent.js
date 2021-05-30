import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import DishDetail_info from './DishdetailComponent.js';

class Menu extends Component {

    constructor(props) {
        super(props);
//used to store some property of the component
        this.state = {
            selectedDish: null
        };
        console.log('Menu component constructed');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }
// redercomment
  renderDish_comment(dish) {
      if (dish != null)
          return(
              <Card>
                  {/* <CardImg top src={dish.image} alt={dish.name} /> */}
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

    render() {
      // make the menucode short
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
                {/*  */}
                {/* <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div> */}
                {/* then render the detail version  */}

              <DishDetail_info dish={this.state.selectedDish} />


            </div>
        );
    }
}
// export the compunnet from the file
export default Menu;