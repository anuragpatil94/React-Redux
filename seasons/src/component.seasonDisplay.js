import "./component.seasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Brr, It's Cold!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.data.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  // The classes used here are based on semantic-ui CSS framework.
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} massive icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} massive icon`} />
    </div>
  );
};

export default SeasonDisplay;
