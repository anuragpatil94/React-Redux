import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  // This function gets the change in state from child class to app class
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID ee4e75a842cf172bdbd0e98e736755a0ff1afec1c5578f5870fd54d0c6491afc"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* We Passed a function as props from App -> SearchBar */}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
