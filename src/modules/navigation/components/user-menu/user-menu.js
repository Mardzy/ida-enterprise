import React from "react";
import PT from "prop-types";
import IPT from "react-immutable-proptypes";
import { Menu } from "semantic-ui-react";

import InlineDots from "../../../../ui/loaders/inline";
import { getDisplayName } from "../../utils/user";

/**
 * User menu
 * @type {ReactComponent}
 */
class UserMenu extends React.Component {

  /**
   * @type {{fetchUser: function, onLogoutClicked: function, user: object, isLoading: boolean}}
   * @memberOf UserMenu
   */
  static propTypes = {
    isLoading: PT.bool,
    onLogoutClicked: PT.func,
    user: IPT.map.isRequired
  };

  /**
   * @type {{fetchUser: function(): null, onLogoutClicked: function(): null}}
   * @memberOf UserMenu
   */
  static defaultProps = {
    onLogoutClicked: () => null
  };

  render () {
    return (
      <Menu.Item>
        <Menu.Header>
          {getDisplayName(this.props.user)}
          {" "}
          {this.props.isLoading ? <InlineDots amount={3}/> : null}
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item onClick={this.props.onLogoutClicked}>Log out</Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    );
  }

}

export default UserMenu;