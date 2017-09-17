import * as React from "react";
import "./App.css";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "../node_modules/react-responsive-carousel/lib/styles/main.css";
import HomePage from "./components/home-page";
import AboutPage from "./components/about-page";
import MissingPage from "./components/missing-page";
import NavBar from "./components/nav-bar";
import { Route, Switch, RouteComponentProps, Redirect } from "react-router";
import Api from "./utils/api";
import { apiCall, apiMovement, movement, photoCall } from "./utils/interface";

interface AppState {
  movements: movement[];
  mostRecentPhoto: movement;
  loading: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super()
    this.state = {
      movements: [],
      mostRecentPhoto: {status: '', date: new Date(), image: ''},
      loading: false
    }
  }


  takePhoto() {
    return Api.takePhoto().then((data: photoCall) => {
      const newMovement: movement = {
        image: "data:image/jpeg;base64," + data.photos[0].image,
        status: "",
        date: new Date(data.photos[0].time)
      };
      this.setState({ mostRecentPhoto: newMovement, loading: false });
    });
  }

  routeRequest = (props: RouteComponentProps<string>) => {
    if (props.match.path === "/home" && this.state.movements.length>1) {
      return (
        <HomePage
          movements={this.state.movements}
          allowDoorOpen={true}
          currentStatus={this.state.movements[0].status}
          mostRecentPhoto={this.state.mostRecentPhoto}
          takePhoto={() => this.takePhoto()}
          loading={this.state.loading}
        />
      );
    } else if (props.match.path === "/about") {
      return <AboutPage />;
    }
    return <MissingPage />;
  };

  formatData(data: apiMovement[]) {
    let movements: movement[] = data.map((event: apiMovement) => {
      if (event.image.length > 1) {
        return {
          status: event.bear_status,
          date: new Date(event.event_time),
          image: "data:image/jpeg;base64," + event.image
        };
      } else {
        return {
          status: event.bear_status,
          date: new Date(event.event_time),
          image: "/images/no_available_image.png"
        };
      }
    });
    return (movements = movements.sort(
      (a: movement, b: movement) => b.date.getTime() - a.date.getTime()
    ));
  }

  componentWillMount() {
     Api.getMovementData().then((data: apiCall) => {
      this.setState({ movements: this.formatData(data.data.events) });
    });

  }

  componentDidMount() {
    this.takePhoto()
  }

  render() {
    console.log('render')
    return (
      <div className="view">
        <NavBar />
        <Switch>
          <Route exact={true} path="/" render={() => <Redirect to="/home" />} />
          <Route exact={true} path="/home" component={this.routeRequest} />
          <Route exact={true} path="/about" component={this.routeRequest} />
        </Switch>
      </div>
    );
  }
}

export default App;
