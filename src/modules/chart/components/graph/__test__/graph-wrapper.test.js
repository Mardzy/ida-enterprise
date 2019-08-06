import Graph from "../graph";

describe("The graph wrapper", () => {

  it("renders an empty shell", () => {
    const wrapper = mount(<Graph/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  })

});