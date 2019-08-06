import React from "react";
import PT from "prop-types";
import Flex from "styled-flex-component";
import { Header } from "semantic-ui-react";

import Segment from "../../../../ui/layout/segment";

/**
 * Login page.
 * @type {ReactComponent}
 */
class LoginPage extends React.Component {

  /**
   * @memberOf LoginPage
   * @type {{renderForm: function}}
   */
  static propTypes = {
    renderForm: PT.func
  };

  /**
   * @memberOf LoginPage
   * @type {{renderForm: function(): null}}
   */
  static defaultProps = {
    renderForm: () => null
  };

  render () {
    return (
      <Flex center full column>
        <Header as="h3">Welcome to the Partner Dashboard</Header>
        <p>Please log in to continue</p>
        <Segment padded minWidth={300}>
          {this.props.renderForm()}
        </Segment>
      </Flex>
    );
  }

}

export default LoginPage;