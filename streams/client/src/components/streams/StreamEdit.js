import React from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    // This is because if we directly navigate to /edit/:id then since the page is
    // loaded for first time it doesn't have any state with streams object.
    // hence we load the object using fetchStream
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    return <div>Edit</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
