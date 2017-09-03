import * as React from 'react';
import './App.css';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import '../node_modules/react-responsive-carousel/lib/styles/main.css';
import HomePage from './components/home-page';
import AboutPage from './components/about-page';
import NavBar from './components/nav-bar';
import { Route, Switch, RouteComponentProps, Redirect } from 'react-router'
import Api from './utils/api';
import { apiCall, apiMovement, movement } from "./utils/interface";
import { unavailable } from './utils/photo-file';

interface AppState {
  movements: movement[];
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super()
    this.state = {
      movements: []
    }
  }


  routeRequest = (props: RouteComponentProps<any>) => {
    if (props.match.path === '/home' && this.state.movements.length > 1) {
      return <HomePage movements={this.state.movements} allowDoorOpen={true} currentStatus={this.state.movements[0].status} />
    }
    else if (props.match.path === '/about') {
      return <AboutPage />
    }
    return null;
  }

  formatData(data: apiMovement[]) {
    let movements: movement[] = data.map((event: apiMovement) => {
      if (event.image.length > 1) {
        return {
          status: event.bear_status,
          date: new Date(event.event_time),
          image: 'data:image/jpeg;base64,' + event.image
        }
      }
      else {
        return {
          status: event.bear_status,
          date: new Date(event.event_time),
          image: unavailable
        }
      }
    })
   return movements = movements.sort((a: movement, b: movement) => b.date.getTime() - a.date.getTime());
  }



  componentWillMount() {
    Api.getMovementData().then((data: apiCall) => {
      this.setState({ movements: this.formatData(data.data.events) });
    });
  }

  render() {
    return (
      <div className='view' >
        <NavBar />
        <Switch>
          <Route exact={true} path='/' render={() => <Redirect to="/home"/>} />
          <Route exact={true} path='/home' component={this.routeRequest} />
          <Route exact={true} path='/about' component={this.routeRequest} />
        </Switch>
      </div >
    );
  }
}

export default App;
