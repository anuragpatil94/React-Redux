// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function createButtonText() {
  return "Click On Me!";
}

// Create React Components
const App = function() {
  // Type of elements JSX can take- string, number, list(joined with empty string)
  const buttonText = "Click Me!!";
  const buttonText1 = { text : "Click Me!"};
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {/* {buttonText} */}
        {buttonText1.text}
        {/* {createButtonText()} */}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
