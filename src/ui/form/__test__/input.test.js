import { Provider } from "react-redux";
import { reduxForm } from "redux-form";

import store from "../../../data/store";

import InputField from "../input";

describe("The login form component", () => {
  const formWrapper = reduxForm({
    form: "test"
  });

  it("renders without error", () => {
    const FormWithInput = formWrapper(props => (
      <form className="ui form" action="javascript:;">
        <InputField name="field" label="Input field" placeholder="Start typing"/>
      </form>
    ));

    const wrapper = mount(
      <Provider store={store}>
        <FormWithInput/>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});