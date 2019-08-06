import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import UserMenu from "../user-menu";
import FarmsMenu from "../farms-menu";

/**
 * Main navigation component of the Partner dashboard.
 * This contains the links to the farms, the user menu items, the settings, the logout, etc.
 * @type {ReactComponent}
 */
class MainNavigation extends React.Component {

  renderFarmEntry (props) {
    return (
      <Menu.Item key={props.get("FarmID")}>{props.get("farmName")}</Menu.Item>
    );
  }

  render () {
    return (
      <Menu vertical fluid>
        <Menu.Item>
          <Link to="/">Dashboard</Link>
        </Menu.Item>

        <FarmsMenu header="My farms" renderItem={this.renderFarmEntry}/>

        <UserMenu/>
      </Menu>
    );
  }

}

export default MainNavigation;