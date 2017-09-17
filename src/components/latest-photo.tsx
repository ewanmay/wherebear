import * as React from "react";
import { createDateString } from "../utils/helpers";
import { Row } from "react-bootstrap";
import * as FontAwesome from "react-fontawesome";
import { movement } from "../utils/interface";

interface LatestPhotoProps {
  currentPhoto: movement;
  allowDoorOpen: boolean;
  openDoor: () => void;
  takePhoto: () => void;
  loading: boolean;
}

interface LatestPhotoState {
  allowDoorOpen: boolean;
  loading: boolean;
  currentPhoto: movement;
  date: string;
}

class LatestPhoto extends React.Component<LatestPhotoProps, LatestPhotoState> {
  constructor(props: LatestPhotoProps) {
    super(props);
    this.state = {
      allowDoorOpen: this.props.allowDoorOpen,
      loading: this.props.loading,
      currentPhoto: this.props.currentPhoto,
      date: createDateString(this.props.currentPhoto.date)
    };
  }

  buttons() {
    return (
      <Row>
        <button
          className="btn btn-success"
          onClick={() => this.props.openDoor()}
          title="Open Door"
          disabled={this.state.allowDoorOpen ? true : false}
        >
          Open Door
        </button>
        <button
          className="btn btn-info"
          onClick={() => this.props.takePhoto()}
          title="Unsure if bear is there? Take another photo"
          disabled={this.state.loading ? true : false}
        >
          Take Another Photo
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.openDoor()}
          title="Open Door"
          disabled={this.state.allowDoorOpen ? true : false}
        >
          Don't Open
        </button>
      </Row>
    );
  }

  photo() {
    if (this.state.loading) {
      return (
        <div className="latest-photo-img">
          <FontAwesome
            name="circle-o-notch"
            size="4x"
            spin={true}
            className="loading-icon"
          />
        </div>
      );
    } else {
      return <img src={this.state.currentPhoto.image} />;
    }
  }

  render() {
    console.log(this.props, this.state)
    return (
      <div className="latest-photo col-md-12">
        <h1 className="col-md-12 title">Latest Information</h1>
        <h1 className="latest-information-string">
          Photo taken at {this.state.date}
        </h1>
        {this.buttons()}
        {this.photo()}
      </div>
    );
  }
}

export default LatestPhoto;
