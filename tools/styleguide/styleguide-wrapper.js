import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "../../src/data/store";

/**
 * Add redux store to components rendered with Styleguidist.
 */
export default class Wrapper extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}