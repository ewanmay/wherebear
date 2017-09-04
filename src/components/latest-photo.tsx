import * as React from 'react';
import { movement } from '../utils/interface';
import { createDateString } from '../utils/helpers';

interface LatestPhotoProps {
  movement: movement;
  allowDoorOpen: boolean;
  openDoor: () => void;
}

interface LatestPhotoState {
  allowDoorOpen: boolean;
}

class LatestPhoto extends React.Component<LatestPhotoProps, LatestPhotoState> {
  constructor(props: LatestPhotoProps) {
    super(props);
    this.state = {
      allowDoorOpen: this.props.allowDoorOpen
    };
  }
  render() {
    return (
      <div className="latest-photo col-md-12">
        <h1 className="col-md-12 title">Latest Information</h1>
        <h1 className="latest-information-string">
          {this.props.movement.status.charAt(0).toUpperCase() +
            this.props.movement.status.slice(1)}{' '}
          at {createDateString(this.props.movement.date)}
        </h1>
        <button
          className="btn btn-success"
          onClick={() => this.props.openDoor()}
          title="Open Door"
          disabled={this.state.allowDoorOpen ? true : false}
        >
          Open Door
        </button>
        <img src={this.props.movement.image} />
      </div>
    );
  }
}

export default LatestPhoto;
