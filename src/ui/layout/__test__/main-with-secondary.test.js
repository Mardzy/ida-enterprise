import MainWithSecondary from "../main-with-secondary";

describe("The main with secondary content", () => {

  it("renders both sections", () => {
    const main = () => <div className="main">Main</div>;
    const secondary = () => <div className="secondary">Secondary</div>;

    const wrapper = mount(
      <MainWithSecondary main={main} secondary={secondary}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});