import Segment from "../segment";

describe("The Segment component", () => {

  it("uses 'auto' as min-height and min-width if no props are passed", () => {
    const wrapper = mount(<Segment>Lorem ipsum dolor</Segment>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("sets min-height and min-width with props", () => {
    const wrapper = mount(<Segment minWidth={200} minHeight={300}>Lorem ipsum dolor</Segment>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});