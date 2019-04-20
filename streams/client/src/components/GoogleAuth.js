import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    // At this point the component is rendered. Hence to re-render after the auth is setup, use component level state.
    // The Callback function is only called after Google API library is fully loaded.
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "724791036278-i5o7f8lm4hgpbjjoopd1kaduoesgqai2.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // Set State to re-render
          this.onAuthChange(this.auth.isSignedIn.get());
          //   This will make sure that any change in the authentication signin or signout will change the state without refreshing.
          //   i.e. signin and signout without refresh and reflect it on screen
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) return null;
    else if (this.props.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    else
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
