import React from "react";
import { Form, Input, Label } from "semantic-ui-react";
import { Field } from "redux-form/immutable";

/**
 * Redux-form compatible input field
 * @type {ReactComponent}
 */
class InputField extends React.Component {

  /**
   * Render the input field.
   * @param {Object} props
   */
  renderField ({ input, label, required, width, inline, meta: { touched, error }, ...rest }) {
    return (
      <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
        {label && <label>{label}</label>}

        <Input required={required} {...input} {...rest} />

        {touched && error ? (
          <Label basic color="red" pointing>
            {error}
          </Label>
        ) : null}
      </Form.Field>
    );
  }

  render () {
    return (
      <Field {...this.props} component={this.renderField}/>
    );
  }

}

export default InputField;