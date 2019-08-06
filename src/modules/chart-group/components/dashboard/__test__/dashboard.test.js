import { fromJS } from "immutable";
import Dashboard, { CHART_GROUP_SECTIONS } from "../dashboard";

describe("The chart group dashboard", () => {

  it("renders without passing any props", () => {
    const wrapper = mount(<Dashboard/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("uses a custom chart renderer function", () => {
    const renderChart = chart => chart.get("config");

    const sections = fromJS({
      [CHART_GROUP_SECTIONS.main]: [{ config: "abcd" }],
      [CHART_GROUP_SECTIONS.left]: [{ config: "asdf" }],
      [CHART_GROUP_SECTIONS.right]: [{ config: "sdfg" }]
    });

    const wrapper = mount(<Dashboard renderChart={renderChart} sections={sections}/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});