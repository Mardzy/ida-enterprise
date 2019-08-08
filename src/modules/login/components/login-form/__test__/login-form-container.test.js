import LoginFormContainer from "../login-form-container";
import { Provider } from "react-redux";

import store from "../../../../../data/store";

describe("The login form container", () => {

  it("renders without error", () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginFormContainer />
      </Provider>
    );
    // expect(toJson(wrapper)).toMatchSnapshot();
  });

});