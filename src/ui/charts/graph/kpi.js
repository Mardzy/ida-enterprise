import React from "react";
import _ from "lodash";
import IPT from "react-immutable-proptypes";
import { Table } from "semantic-ui-react";

/**
 * Sort directions.
 * @type {{ascending: string, descending: string}}
 */
const DIRECTIONS = {
  ascending: "ascending",
  descending: "descending"
};

/**
 * KPI table graph
 * @type {ReactComponent}
 */
class KPIGraph extends React.Component {

  /**
   * @memberOf KPIGraph
   * @type {{data: Immutable.Map}}
   */
  static propTypes = {
    data: IPT.map
  };

  /**
   * @memberOf KPIGraph
   * @type {{sortedBy: null, direction: null}}
   */
  state = {
    sortedBy: null,
    direction: null
  };

  /**
   * Tell whether the data is sorted by the given column id.
   * @memberOf KPIGraph
   * @param {string} what
   * @public
   * @return {string|null}
   */
  isSorted (what) {
    const { sortedBy, direction } = this.state;

    return sortedBy === what ? direction : null;
  }

  /**
   * Set sorting state
   * @memberOf KPIGraph
   * @public
   * @param {string} clickedColumn - id of the clicked column
   */
  handleSort (clickedColumn) {
    const { sortedBy, direction } = this.state;

    if (sortedBy !== clickedColumn) {
      this.setState({
        sortedBy: clickedColumn,
        direction: DIRECTIONS.ascending,
      });
    } else {
      /**
       * @type {boolean}
       */
      const isAscending = direction === DIRECTIONS.ascending;

      this.setState({
        direction: isAscending ? DIRECTIONS.descending : DIRECTIONS.ascending,
      })
    }
  }

  /**
   * Sort data
   * @memberOf KPIGraph
   * @param {Immutable.List} what - what to sort
   * @param {Immutable.List} lookup - lookup list for column order
   * @public
   * @todo Make sure data is sorted with a reducer.
   */
  sortData (what, lookup) {
    const { sortedBy, direction } = this.state;

    /**
     * @type {number}
     */
    const idx = lookup.findIndex(columnId => columnId === sortedBy);

    /**
     * @type {boolean}
     */
    const isAscending = direction === DIRECTIONS.ascending;

    return what.sort((valueA, valueB) => {
      /**
       * @type {number}
       */
      const a = valueA.getIn(["kpi", idx, "value"]);

      /**
       * @type {number}
       */
      const b = valueB.getIn(["kpi", idx, "value"]);

      return isAscending ? a >= b : a <= b;
    });
  }

  render () {
    const { data } = this.props;
    const { labels, columns: columnOrder, farms } = data ? data.toObject() : {};

    return data && (
      <Table unstackable selectable striped definition sortable fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell/>
            {columnOrder.map(columnId => (
              <Table.HeaderCell key={columnId}
                                sorted={this.isSorted(columnId)}
                                onClick={_.bind(this.handleSort, this, columnId)}>
                {labels.get(columnId)}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.sortData(farms, columnOrder).map(farm => (
            <Table.Row key={farm.get("name")}>
              <Table.Cell>{farm.get("name")}</Table.Cell>
              {farm.get("kpi").map(kpi => (
                <Table.Cell key={kpi.get("id")}>{kpi.get("value")}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }

}

export default KPIGraph;

