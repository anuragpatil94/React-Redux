import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
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

export default connect(mapStateToProps)(UserHeader);
