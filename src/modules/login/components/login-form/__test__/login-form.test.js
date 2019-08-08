import { Provider } from "react-redux";
import { reduxForm } from "redux-form";
import { withProps } from "recompose";

import store from "../../../../../data/store";

import LoginForm from "../login-form";

describe("The login form component", () => {
  const formWrapper = reduxForm({
    form: "test"
  });

  it("displays an error message", () => {
    const error = "This is an error message.";
    const EnhancedForm = formWrapper(withProps({ error })(LoginForm));

    const wrapper = mount(
      <Provider store={store}>
        <EnhancedForm/>
      </Provider>
    );

    // expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("displays a loading indicator", () => {
    const EnhancedForm = formWrapper(withProps({ loading: true })(LoginForm));

    const wrapper = mount(
      <Provider store={store}>
        <EnhancedForm/>
      </Provider>
    );

    // expect(toJson(wrapper)).toMatchSnapshot();
  });

});