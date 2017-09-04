import * as React from 'react';
import MovementItem from './movement-item';
import { movement } from '../utils/interface';
import * as uuid from 'uuid';

interface MovementLogProps {
  movements: movement[];
}

interface MovementLogState {
  movements: movement[];
}

class MovementLog extends React.Component<MovementLogProps, MovementLogState> {
  constructor(props: MovementLogProps) {
    super(props);
    this.state = {
      movements: this.props.movements
    };
  }

  createLogs() {
    if (this.state.movements.length > 0) {
      return this.state.movements.map((movementItem: movement) => {
        return <MovementItem movement={movementItem} key={uuid.v4()} />;
      });
    }
    return null;
  }

  render() {
    return (
      <div className="movement-log col-md-12">
        <h1 className="title">Movement Log</h1>
        <div className="logs">{this.createLogs()}</div>
      </div>
    );
  }
}

export default MovementLog;
