import React from "react";
import { Grid } from "semantic-ui-react";
import PT from "prop-types";
import _ from "lodash";

/**
 * Two column floated layout.
 * @type {ReactComponent}
 */
class DoubleColumn extends React.Component {

  /**
   * @memberOf DoubleColumn
   * @type {{left: function, right: function}}
   */
  static propTypes = {
    left: PT.func,
    right: PT.func
  };

  /**
   * @memberOf DoubleColumn
   * @type {{left: function(): null, right: function(): null}}
   */
  static defaultProps = {
    left: () => null,
    right: () => null,
  };

  render () {
    return (
      <Grid stackable columns={2} {..._.omit(this.props, "left", "right")}>
        <Grid.Column computer={8} tablet={16}>
          {this.props.left()}
        </Grid.Column>
        <Grid.Column computer={8} tablet={16}>
          {this.props.right()}
        </Grid.Column>
      </Grid>
    );
  }

}

export default DoubleColumn;

