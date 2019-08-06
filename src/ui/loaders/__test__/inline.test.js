import InlineDots from "../inline";

describe("The inline loader", () => {

  it("renders 3 dots by default", () => {
    const wrapper = mount(
      <InlineDots/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders 5 dots", () => {
    const wrapper = mount(
      <InlineDots amount={5}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});