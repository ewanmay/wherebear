import * as React from 'react';
import { movement } from '../utils/interface'
import { Col, Image } from "react-bootstrap";
import * as FontAwesome from 'react-fontawesome'
import { createDateString } from '../utils/helpers'

interface MovementItemProps {
    movement: movement
}
class MovementItem extends React.Component<MovementItemProps, {}> {
    

    render() {
        return (
            <div className='movement col-lg-12 col-md-12 col-sm-12'>
                <div className='movement-status col-lg-4 col-md-4 col-sm-4'>
                    {this.props.movement.status === 'outside' ?
                        <FontAwesome name="sign-out" />
                        :
                        <FontAwesome name="sign-in" /> }
                    {" "+this.props.movement.status.charAt(0).toUpperCase() + this.props.movement.status.slice(1)}
                    <br /><br />
                    <FontAwesome name="calendar-o" />
                    {" "+this.props.movement.date.toLocaleDateString()}
                    <br /><br />
                    <FontAwesome name="clock-o" />
                    {" "+ createDateString(this.props.movement.date)}
                </div>
                <Col lg={6} md={4}>
                    <Image src={this.props.movement.image} className='movement-image' thumbnail />
                </Col>
            </div>
        )
    }
}

export default MovementItem