import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

import store from "../../../../../data/store";
import { authTypes } from "../../../../../data/auth";

import LoginPageContainer from "../login-page-container";

describe("The login page container", () => {

  const route = "/already-logged-in";

  it("displays the login form if the user is not logged in", () => {
    const wrapper = mount(
      <Provider store={store}>
        <StaticRouter location={"/"} context={{}}>
          <LoginPageContainer redirectsTo={route}/>
        </StaticRouter>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("redirects to " + route + " if the user is already logged in", () => {
    store.dispatch({
      type: authTypes.LOGIN.FULFILLED,
      payload: {}
    });

    const wrapper = mount(
      <Provider store={store}>
        <StaticRouter location={"/"} context={{}}>
          <LoginPageContainer redirectsTo={route}/>
        </StaticRouter>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
