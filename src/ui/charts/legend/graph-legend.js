import _ from "lodash";
import React from "react";
import PT from "prop-types";
import IPT from "react-immutable-proptypes";
import Flex from "styled-flex-component";
import { fromJS } from "immutable";
import styled from "styled-components";

import LegendItem from "./legend-item";
import { spacing } from "../../style/whitespace";
import { border } from "../../style/border";
import { ColorPalette } from "../../charts/palette";

/**
 * Padded legend item
 * @type {ReactComponent}
 */
const PaddedLegendItem = styled(LegendItem)`
  ${border({ style: "dashed", color: "alto" })}
  ${props => props.isFirstInRow ? "border-left: 0;" : ""}
  ${props => props.isInLastRow ? "border-bottom: 0;" : ""}
  border-top: 0;
  border-right: 0;
  padding: ${spacing(1)};
`;

/**
 * Graph legend
 * @type {ReactComponent}
 */
class GraphLegend extends React.Component {

  /**
   * @memberOf GraphLegend
   * @type {{items: *, columns}}
   */
  static propTypes = {
    /** legend items */
    items: IPT.list,
    /** the number of columns to render */
    columns: PT.number,
    /** color palette */
    palette: PT.instanceOf(ColorPalette)
  };

  /**
   * @memberOf GraphLegend
   * @type {{items: Immutable.list, columns: number}}
   */
  static defaultProps = {
    items: fromJS([]),
    columns: 2
  };

  /**
   * Create placeholders to always fill up the last row
   * @memberOf GraphLegend
   * @param {number} count
   * @param {number} columns
   * @return {any}
   */
  getEmptyPlaceholders (count, columns) {
    /**
     * @type {number}
     */
    const orphans = count % columns;

    /**
     * @type {number}
     */
    const placeholdersToAppend = orphans ? columns - orphans : 0;

    return fromJS(_.times(placeholdersToAppend, _.constant({})));
  }

  /**
   * @memberOf GraphLegend
   * @return {*}
   */
  renderItems () {
    const { items, columns } = this.props;

    /**
     * @type {string}
     */
    const basisPercentage = `${100 / columns}%`;

    /**
     * @type {Immutable.list}
     */
    const legends = items.concat(this.getEmptyPlaceholders(items.count(), columns));

    /**
     * @type {number}
     */
    const totalItemCount = legends.count();

    return legends.map((item, idx) => {
      const { label, value } = item.toJS();

      /**
       * @type {string}
       */
      const color = this.props.palette.pick(label);

      /**
       * @type {boolean}
       */
      const isFirstInRow = idx % columns === 0;

      /**
       * @type {boolean}
       */
      const isInLastRow = totalItemCount - idx <= columns;

      /**
       * @type {string|number}
       */
      const key = label || idx;

      /**
       * @type {{isFirstInRow: boolean, isInLastRow: boolean, key: string|number, color, value}}
       */
      const props = {
        isFirstInRow, isInLastRow,
        key, color, value
      };

      return (
        <PaddedLegendItem basis={basisPercentage} {...props}>
          {label}
        </PaddedLegendItem>
      );
    });
  }

  render () {
    return (
      <Flex wrap="wrap" full>
        {this.renderItems()}
      </Flex>
    );
  }

}

export default GraphLegend;