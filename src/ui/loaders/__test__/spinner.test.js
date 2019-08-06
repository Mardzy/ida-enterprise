import SpinnerWithOverlay from "../spinner";

describe("The spinner with overlay", () => {

  it("renders a spinner", () => {
    const wrapper = mount(
      <SpinnerWithOverlay/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders a spinner with text", () => {
    const wrapper = mount(
      <SpinnerWithOverlay>Loading content</SpinnerWithOverlay>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});