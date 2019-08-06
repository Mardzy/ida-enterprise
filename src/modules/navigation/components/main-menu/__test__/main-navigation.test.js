import MainMenu from "../../main-menu";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

import store from "../../../../../data/store";
import { farmTypes } from "../../../../../data/farms/index";
import { authTypes } from "../../../../../data/auth/index";

describe ("The farm selector menu", () => {

  it("displays a list of farms and the user menu", () => {
    store.dispatch({
      type: farmTypes.FETCH_FARM_LIST.FULFILLED,
      payload: {
        value: [{
          FarmID: 1,
          farmName: "Sandor's Farm"
        }, {
          FarmID: 2,
          farmName: "Lorem ipsum dolor"
        }]
      }
    });

    store.dispatch({
      type: authTypes.REQUEST_USER.FULFILLED,
      payload: {
        givenName: "Sandor",
        surName: "Kocsis"
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <StaticRouter location={"/"} context={{}}>
          <MainMenu/>
        </StaticRouter>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});