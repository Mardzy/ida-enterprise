import ChartWrapper from "../chart";

describe("The chart wrapper", () => {

  // TODO: add more tests

  it("Renders an empty shell", () => {
    const wrapper = mount(<ChartWrapper/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});