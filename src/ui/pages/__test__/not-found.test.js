import NotFound from "../not-found";

describe("The 404 page component", () => {

  it("renders without error", () => {
    const wrapper = mount(<NotFound/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});