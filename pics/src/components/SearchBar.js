import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // This Throws error because for whatever reason the this is not bind to the functions. A way to solve this is using the Arrow Function
  /*
    onFormSubmit(event) {
      event.preventDefault();
      console.log(this.state.term);
    }
  */
  // Arrow function automatically binds all the value of 'this' for all the code inside the function
  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    // this.onInputChange() - This will be called automatically when a component is rendered.
    // Hence we only use it as 'this.onInputChange' which makes it a callback function and will be invoked only when its required.
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              //   we can force input to do some string functions link toUpperCase, toLowerCase etc.
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
