import * as React from 'react';
import { movement } from "../utils/interface";
import MovementLog from './movement-log';
import LatestPhoto from './latest-photo';

interface HomePageProps {
    movements: movement[];
    allowDoorOpen: boolean;
    currentStatus: string;
}

interface HomePageState {
    movements: movement[];
    allowDoorOpen: boolean;
    currentStatus: string;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {
            movements: this.props.movements,
            allowDoorOpen: this.props.allowDoorOpen,
            currentStatus: this.props.currentStatus
        }
    }

    openDoor() {
        const currentState = this.state.movements;
        const movement: movement = {
            date: new Date(),
            status: this.props.currentStatus === 'Outside' ? 'Inside' : 'Outside'
        }
        this.setState({ movements: currentState.concat(movement) })
    }


    render() {
        console.log(this.props);
        if (this.props.movements.length > 1) {
            return (
                <div className='home-page'>
                    <div className="col-md-4 col-lg-4 col-sm-4">
                        <MovementLog movements={this.state.movements} />
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4">
                        <LatestPhoto movement={this.state.movements[0]} allowDoorOpen={this.state.allowDoorOpen} openDoor={() => this.openDoor()} />
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default HomePage