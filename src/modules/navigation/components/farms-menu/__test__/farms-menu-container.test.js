import { Provider } from "react-redux";
import { Menu } from "semantic-ui-react";

import store from "../../../../../data/store";
import FarmsMenuContainer from "../farms-menu-container";
import { authTypes } from "../../../../../data/auth";
import { farmTypes } from "../../../../../data/farms";

describe("The farms menu container", () => {

  it("renders nothing while loading", () => {
    const wrapper = mount(<Provider store={store}>
      <FarmsMenuContainer/>
    </Provider>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("render a list of farms", () => {
    store.dispatch({
      type: authTypes.REQUEST_USER.FULFILLED,
      payload: {}
    });

    store.dispatch({
      type: farmTypes.FETCH_FARM_LIST.FULFILLED,
      payload: {
        value: [{
          FarmID: 1,
          farmName: "Lorem Ipsum"
        }, {
          FarmID: 2,
          farmName: "Diam Dolor"
        }]
      }
    });

    /**
     * @param farm
     * @return {*}
     */
    const renderItem = farm => <Menu.Item key={farm.get("FarmID")}>{farm.get("farmName")}</Menu.Item>;

    const wrapper = mount(<Provider store={store}>
      <FarmsMenuContainer renderItem={renderItem}/>
    </Provider>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});