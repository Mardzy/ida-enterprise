import React from "react";
import PT from "prop-types";
import Flex, { FlexItem } from "styled-flex-component";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

/**
 * Icon with custom color
 * @type {ReactComponent}
 */
const IconWithColor = styled(({ color, ...rest}) => <Icon {...rest}/>)`
  color: ${props => props.color};
`;

/**
 * Single legend item
 * @type {ReactComponent}
 */
class LegendItem extends React.Component {

  /**
   * @memberOf LegendItem
   * @type {{color: shim, label: shim, value: shim}}
   */
  static propTypes = {
    /** color swatch */
    color: PT.string,
    /** value to display, if any */
    value: PT.any,
    /** flex basis of the legend item */
    basis: PT.string
  };

  /**
   * @memberOf LegendItem
   * @type {{basis: string}}
   */
  static defaultProps = {
    basis: "100%"
  };

  render () {
    const { color, value, children } = this.props;

    return (
      <FlexItem className={this.props.className} basis={this.props.basis}>
        <Flex full alignCenter>
          {color && <IconWithColor name="square" color={color}/>}
          <FlexItem grow={1}>{children}</FlexItem>
          {value && <span>{value}</span>}
        </Flex>
      </FlexItem>
    );
  }

}

export default LegendItem;