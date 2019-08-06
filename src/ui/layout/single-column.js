import React from "react";
import { Grid } from "semantic-ui-react";
import _ from "lodash";
import PT from "prop-types";

/**
 * Single colum grid component.
 * @type {ReactComponent}
 */
class SingleColumn extends React.Component {

  /**
   * @memberOf SingleColumn
   * @type {{content: shim}}
   */
  static propTypes = {
    content: PT.func,
  };

  /**
   * @memberOf DoubleColumn
   * @type {{content: function(): null}}
   */
  static defaultProps = {
    content: () => null
  };

  render () {
    return (
      <Grid stackable columns={1} {..._.omit(this.props, "content")}>
        <Grid.Column>
          {this.props.content()}
        </Grid.Column>
      </Grid>
    );
  }

}

export default SingleColumn;