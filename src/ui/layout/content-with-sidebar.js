import React from "react";
import PT from "prop-types";
import { Grid } from "semantic-ui-react";
import _ from "lodash";

/**
 * A layout component, main content with a sidebar on the left.
 * @type {ReactComponent}
 */
class ContentWithSidebar extends React.Component {

  /**
   * @memberOf ContentWithSidebar
   * @type {{sidebar, content}}
   */
  static propTypes = {
    /** renders the content section */
    content: PT.func,
    /** renders the sidebar section */
    sidebar: PT.func
  };

  /**
   * @memberOf ContentWithSidebar
   * @type {{sidebar: function(): null, content: function(): null}}
   */
  static defaultProps = {
    sidebar: () => null,
    content: () => null,
  };

  render () {
    return (
      <Grid stackable columns={2} {..._.omit(this.props, "sidebar", "content")}>
        <Grid.Column computer={3} tablet={5}>
          {this.props.sidebar()}
        </Grid.Column>
        <Grid.Column computer={13} tablet={11}>
          {this.props.content()}
        </Grid.Column>
      </Grid>
    );
  }

}

export default ContentWithSidebar;