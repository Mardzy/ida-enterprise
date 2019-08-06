import React from "react";
import PT from "prop-types";
import IPT from "react-immutable-proptypes";
import { fromJS } from "immutable";
import { Menu } from "semantic-ui-react";

import InlineDots from "../loaders/inline";

/**
 * Submenu with loader
 * @type {ReactComponent}
 */
class SubmenuWithLoader extends React.Component {

  /**
   * @type {{header: string, isLoading: boolean, items: List, renderItem: function}}
   * @memberOf SubmenuWithLoader
   */
  static propTypes = {
    /** header to display over the items */
    header: PT.string,
    /** loading indicator */
    isLoading: PT.bool,
    /** menu items */
    items: IPT.list,
    /** item render prop */
    renderItem: PT.func
  };

  /**
   * @type {{items: [], renderItem: function}}
   * @memberOf SubmenuWithLoader
   */
  static defaultProps = {
    items: fromJS([]),
    renderItem: (props, idx, items) => null
  };

  renderHeader () {
    return this.props.header ? (
      <Menu.Header>
        {this.props.header}
        {" "}
        {this.props.isLoading ? <InlineDots/> : null}
      </Menu.Header>
    ) : null;
  }

  render () {
    return (
      <Menu.Item>
        {this.renderHeader()}
        <Menu.Menu>
          {/* <Menu.Item>Some menu item</Menu.Item> */}
          {this.props.items.map(this.props.renderItem)}
        </Menu.Menu>
      </Menu.Item>
    );
  }

}

export default SubmenuWithLoader;