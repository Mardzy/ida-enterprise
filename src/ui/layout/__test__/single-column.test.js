import SingleColumn from "../single-column";

describe("The single column component", () => {

  it("renders its content", () => {
    const content = () => <div className="content">Content</div>;

    const wrapper = mount(
      <SingleColumn content={content}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});