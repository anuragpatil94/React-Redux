import React from "react";
import ReactDOM from "react-dom";

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
  constructor(props) {
    //   This is must
    super(props);

    // THIS IS THE ONLY TIME WE DIRECTLY ASSIGN TO this.state
    this.state = { lat: null, errorMessage: "" };

    //   Async Process
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  // Requirement for React
  // At first the state object will display null but as soon as the state is
  // updated the Component is automatically re-rendered.
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
