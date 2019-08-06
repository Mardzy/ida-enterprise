import DoubleColumn from "../double-column";

describe("The double column component", () => {

  it("renders both sections", () => {
    const left = () => <div className="left">Left</div>;
    const right = () => <div className="right">Right</div>;

    const wrapper = mount(
      <DoubleColumn left={left} right={right}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});