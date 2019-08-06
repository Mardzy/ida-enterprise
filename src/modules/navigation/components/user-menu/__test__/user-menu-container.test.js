import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import store from "../../../../../data/store";
import UserMenuContainer from "../user-menu-container";
import authTypes from "../../../../../data/auth/types";

const mockStore = configureStore([]);

describe("The user menu container", () => {

  it("displays the user's full name after it has been loaded", () => {
    const testStore = mockStore({});

    store.dispatch({
      type: authTypes.REQUEST_USER.FULFILLED,
      payload: {
        username: "sandor@connecterra.io",
        givenName: "Sandor",
        surName: "Kocsis"
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <UserMenuContainer/>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});