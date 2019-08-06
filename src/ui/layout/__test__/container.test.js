import Container from "../container";

describe("The Container component", () => {

  it("sets bottom margin when the whitespaceAfter prop is passed", () => {
    const wrapper = mount(<Container whitespaceAfter={2}>Lorem ipsum dolor</Container>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});