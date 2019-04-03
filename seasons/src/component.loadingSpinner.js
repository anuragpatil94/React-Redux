import React from "react";

const LoadingSpinner = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.data.message}</div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  data: { message: "Loading..." }
};

export default LoadingSpinner;
