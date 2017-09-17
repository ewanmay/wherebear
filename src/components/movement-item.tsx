import * as React from "react";
import { movement } from "../utils/interface";
import { Col, Image } from "react-bootstrap";
import * as FontAwesome from "react-fontawesome";
import { createDateString } from "../utils/helpers";

interface MovementItemProps {
  movement: movement;
}
class MovementItem extends React.Component<MovementItemProps, {}> {
  status() {
    return (
      <div className="movement-status">
        {this.props.movement.status === "outside" ? (
          <FontAwesome name="sign-out" />
        ) : (
          <FontAwesome name="sign-in" />
        )}
        {" " +
          this.props.movement.status.charAt(0).toUpperCase() +
          this.props.movement.status.slice(1)}
      </div>
    );
  }

  dateHours() {
    return (
      <div className="movement-date">
        <FontAwesome name="calendar-o" />
        {" " + this.props.movement.date.toLocaleDateString()}
      </div>
    );
  }

  dateDay() {
    return (
      <div className="movement-date">
        <FontAwesome name="clock-o" className="date-item" />
        {" " + createDateString(this.props.movement.date)}
      </div>
    );
  }

  image() {
    return (
      <div className="movement-image">
        <Col lg={6} md={4}>
          <Image
            src={this.props.movement.image}
            className="movement-image"
            thumbnail={true}
          />
        </Col>
      </div>
    );
  }

  render() {
    return (
      <div className="movement col-lg-12 col-md-12 col-sm-12">
        <div className="col-lg-4 col-md-4 col-sm-4">
          {this.status()}
          {this.dateHours()}
          {this.dateDay()}
        </div>
        {this.image()}
      </div>
    );
  }
}

export default MovementItem;
