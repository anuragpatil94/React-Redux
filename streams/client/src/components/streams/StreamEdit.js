import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    // This is because if we directly navigate to /edit/:id then since the page is
    // loaded for first time it doesn't have any state with streams object.
    // hence we load the object using fetchStream
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    console.log(this.props);
    // initialValues here is a key prop which is triggered by ReduxForm and which make sure that the fields in the form
    // will have some initial values. The key in the object should match the `name` field in the <Field/>
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
