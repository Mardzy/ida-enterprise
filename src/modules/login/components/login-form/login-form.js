import React from "react";
import PT from "prop-types";
import Flex from "styled-flex-component";
import { Form, Button, Message } from "semantic-ui-react";

import InputField from "../../../../ui/form/input";

/**
 * Login form.
 * @type {ReactComponent}
 */
class LoginFormComponent extends React.Component {

  /**
   * @memberOf LoginFormComponent
   * @type {{username: string, onSubmit: Function, error: string, loading: boolean}}
   */
  static propTypes = {
    /** submit handler */
    handleSubmit: PT.func,
    /** error state */
    error: PT.string,
    /** loading indicator */
    loading: PT.bool
  };

  render () {
    const { handleSubmit, error, loading } = this.props;

    return (
      <Form onSubmit={handleSubmit} error={!!error}>
        <InputField disabled={loading} label="Username" name="username" type="text"/>
        <InputField disabled={loading} label="Password" name="password" type="password"/>
        <Message error content={error}/>
        <Flex justifyEnd>
          <Button primary loading={loading} type="submit">Log in</Button>
        </Flex>
      </Form>
    );
  }

}

export default LoginFormComponent;