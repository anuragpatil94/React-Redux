import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions"; //Only if it is a Named Export

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectedSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content"> {song.title}</div>
        </div>
      );
    });
  }
  render() {
    //   returns songs and dispatch and everything in the connect call
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Take State Object -> Computation -> Show as Props
// anytime state is changed this function reruns
const mapStateToProps = state => {
  //   console.log(state);

  // Return Props
  return { songs: state.songs };
};
// 2nd argument is dispatch
export default connect(
  mapStateToProps,
  {
    selectedSong: selectSong
  }
)(SongList);
