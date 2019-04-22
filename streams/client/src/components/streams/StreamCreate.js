import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = formProps => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      // Sematic UI by default has the error message as hidden, hence to make it not hidden, added error className to form
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  // compare with Field "name" property. hence the preperty in errors should match "name" in Field
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title not Entered";
  }
  if (!formValues.description) {
    errors.description = "Description not Entered";
  }
  return errors;
};

const formWrapped = reduxForm({ form: "streamCreate", validate: validate })(
  StreamCreate
);

export default connect(
  null,
  { createStream }
)(formWrapped);
