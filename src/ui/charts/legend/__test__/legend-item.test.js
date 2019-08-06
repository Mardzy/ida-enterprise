import LegendItem from "../legend-item";

describe("The legend item", () => {

  it("renders without passed value", () => {
    const wrapper = mount(
      <LegendItem color="#3992CA">No value, just label</LegendItem>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("displays the value with the label", () => {
    const wrapper = mount(
      <LegendItem color="#3992CA" value="$17,436">Label with value</LegendItem>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});