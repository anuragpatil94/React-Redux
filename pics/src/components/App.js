import React from "react";

import SearchBar from "./SearchBar";

class App extends React.Component {
  // This function gets the change in state from child class to app class
  onSearchSubmit(term) {
    console.log(term);
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
