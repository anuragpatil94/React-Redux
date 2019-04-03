import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./component.seasonDisplay";
import LoadingSpinner from "./component.loadingSpinner";

// Functional Based
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

// Class Based
class App extends React.Component {
  /*
  constructor(props) {
    //   This is must
    super(props);
    // THIS IS THE ONLY TIME WE DIRECTLY ASSIGN TO this.state
    this.state = { lat: null, errorMessage: "" };
  }
  */

  // THIS IS THE ONLY TIME WE DIRECTLY ASSIGN TO this.state
  state = { lat: null, errorMessage: "" };

  componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component Did Mount");
    //   Async Process
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // Requirement for React
  // At first the state object will display null but as soon as the state is
  // updated the Component is automatically re-rendered.
  render() {
    console.log("Render");

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    // Take state and pass it as a prop to another component
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay data={{ latitude: this.state.lat }} />;
    }

    return (
      <LoadingSpinner
        data={{ message: "Please accept the location request!" }}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
