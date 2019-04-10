import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    if (!this.props.song) return <div className="">Select a Song</div>;
    return (
      <div className="">
        <h3>Details For:</h3>
        <p>
          Title: {this.props.song.title}
          <br />
          Duration: {this.props.song.duration}
        </p>
      </div>
    );
  }
}

// 1
const mapStateToProps = state => {
  return { song: state.selectedSong };
};

// 2
export default connect(mapStateToProps)(SongDetail);
