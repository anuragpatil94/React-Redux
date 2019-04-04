import React from "react";

class SearchBar extends React.Component {
  //   state: {};

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    //   this.onInputChange() - This will be called automatically when a component is rendered.
    // Hence we only use it as 'this.onInputChange' which makes it a callback function and will be invoked only when its required.
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input className="" type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
