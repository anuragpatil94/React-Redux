import React from "react";

import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  // This function gets the change in state from child class to app class
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });

    // Async Request
    /* Promise
    axios.get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID ee4e75a842cf172bdbd0e98e736755a0ff1afec1c5578f5870fd54d0c6491afc"
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
      */
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* We Passed a function as props from App -> SearchBar */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
