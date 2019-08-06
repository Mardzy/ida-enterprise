import React from "react";
import IPT from "react-immutable-proptypes";
import { Table, Icon, Header } from "semantic-ui-react";
import { Date as SugarDate } from "sugar-date";

/**
 * Insight list graph
 * @type {ReactComponent}
 */
class InsightsList extends React.Component {

  /**
   * @memberOf InsightsList
   * @type {{data: *}}
   */
  static propTypes = {
    data: IPT.list
  };

  getRelativeDate (epoch) {
    const convertedDate = new Date(0);

    convertedDate.setUTCSeconds(epoch);

    return SugarDate(convertedDate).relative().raw;
  }

  renderInsight (insight) {
    const { farmName, title, description, epoch } = insight.toJS();
    const header = `${title}`;
    const relativeDate = this.getRelativeDate(epoch);
    const key = `${farmName}-${epoch}`;

    return (
      <Table.Row key={key}>
        <Table.Cell>
          <Icon circular name="exclamation" size="big"/>
        </Table.Cell>
        <Table.Cell>
          <Header as={"h3"}>
            {header}
            <Header.Subheader>{farmName} - {relativeDate}</Header.Subheader>
          </Header>
          <p>{description}</p>
        </Table.Cell>
      </Table.Row>
    );
  }

  render () {
    const { data } = this.props;

    return data && (
      <Table basic="very" celled unstackable>
        <Table.Body>
          {data.map(this.renderInsight.bind(this))}
        </Table.Body>
      </Table>
    );
  }

}

export default InsightsList;