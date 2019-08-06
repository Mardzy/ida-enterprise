import { Provider } from "react-redux";

import store from "../../../../../data/store";

import DashboardContainer from "../dashboard-container";
import { CHART_GROUP_SECTIONS } from "../dashboard";
import { authTypes } from "../../../../../data/auth";
import { pageTypes } from "../../../../../data/pages";

describe("The chart group dashboard container", () => {

  it("renders a spinner while loading", () => {
    const wrapper = mount(
      <Provider store={store}>
        <DashboardContainer/>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the section contents from the store", () => {
    /**
     * @type {string}
     */
    const pageId = "dashboard";

    /**
     * @param chartId
     */
    const renderChart = chartId => expect(typeof chartId).toBe("number");

    /**
     * @type {{}}
     */
    const sections = {
      [CHART_GROUP_SECTIONS.main]: [{ id: 1, config: {} }],
      [CHART_GROUP_SECTIONS.left]: [{ id: 2, config: {} }],
      [CHART_GROUP_SECTIONS.right]: [{ id: 3, config: {} }]
    };

    store.dispatch({
      type: authTypes.REQUEST_USER.FULFILLED,
      payload: {
        givenName: "Sandor",
        surName: "Kocsis"
      }
    });

    store.dispatch({
      type: pageTypes.FETCH_CHART_LIST.FULFILLED,
      payload: { pageId, layout: sections }
    });

    const wrapper = mount(
      <Provider store={store}>
        <DashboardContainer renderChart={renderChart} pageId={pageId}/>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  })

});