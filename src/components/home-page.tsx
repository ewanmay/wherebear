import * as React from "react";
import { movement } from "../utils/interface";
import MovementLog from "./movement-log";
import LatestPhoto from "./latest-photo";

interface HomePageProps {
  movements: movement[];
  allowDoorOpen: boolean;
  currentStatus: string;
  mostRecentPhoto: movement;
  takePhoto:() => void;
  loading:boolean
}

interface HomePageState {
  movements: movement[];
  allowDoorOpen: boolean;
  currentStatus: string;
  loading: boolean;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      movements: this.props.movements,
      allowDoorOpen: this.props.allowDoorOpen,
      currentStatus: this.props.currentStatus,
      loading: false,
    };
  }

  openDoor() {
    const currentState = this.state.movements;
    const newMovement: movement = {
      date: new Date(),
      status: this.props.currentStatus === "Outside" ? "Inside" : "Outside",
      image: ""
    };
    this.setState({ movements: currentState.concat(newMovement) });
  }

  render() {
    if (this.props.movements.length > 1) {
      return (
        <div className="home-page">
          <div className="col-md-4 col-lg-4 col-sm-4">
            <MovementLog movements={this.state.movements} />
          </div>
          <div className="col-md-4 col-lg-4 col-sm-4">
            <LatestPhoto
              allowDoorOpen={this.state.allowDoorOpen}
              openDoor={() => this.openDoor()}
              currentPhoto={this.props.mostRecentPhoto}
              takePhoto={() => this.props.takePhoto()}
              loading={this.props.loading}
            />
          </div>
        </div>
      );
    }
    return null;
  }
}

export default HomePage;
