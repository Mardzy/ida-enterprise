import LoginPage from "../login-page";

describe("The login page wrapper", () => {

  it("renders without login form", () => {
    const wrapper = mount(<LoginPage/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});