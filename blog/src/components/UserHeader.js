import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return <div className="header">{this.props.user.name}</div>;
  }
}

// OwnProps is a copy of Props that is to be sent to UserHeader Component.
// The only way to access props in the function
const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => ownProps.userId === user.id);
  return { user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
