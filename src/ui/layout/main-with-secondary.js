import React from "react";
import PT from "prop-types";

/**
 * Main section with secondary content.
 * @type {ReactComponent}
 */
class MainWithSecondary extends React.Component {

  /**
   * @memberOf MainWithSecondary
   * @type {{main: function, secondary: function}}
   */
  static propTypes = {
    main: PT.func,
    secondary: PT.func
  };

  /**
   * @memberOf MainWithSecondary
   * @type {{main: function(): null, secondary: function(): null}}
   */
  static defaultProps = {
    main: () => null,
    secondary: () => null
  };

  render () {
    return (
      <>
        {this.props.main()}
        {this.props.secondary()}
      </>
    );
  }

}

export default MainWithSecondary;