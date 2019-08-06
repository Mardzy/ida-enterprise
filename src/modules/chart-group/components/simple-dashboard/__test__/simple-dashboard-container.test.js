import { Provider } from "react-redux";

import store from "../../../../../data/store";
import { authTypes } from "../../../../../data/auth";
import { pageTypes } from "../../../../../data/pages";

import SimpleDashboardContainer from "../simple-dashboard-container";

describe("The simple dashboard container", () => {

  it("renders a spinner while loading", () => {
    const wrapper = mount(
      <Provider store={store}>
        <SimpleDashboardContainer/>
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
     * @type {[]}
     */
    const charts = [{ id: 1, config: { type: "geo"} }, { id: 2, config: { type: "stats"} }];

    store.dispatch({
      type: authTypes.REQUEST_USER.FULFILLED,
      payload: {
        givenName: "Sandor",
        surName: "Kocsis"
      }
    });

    store.dispatch({
      type: pageTypes.FETCH_CHART_LIST.FULFILLED,
      payload: { pageId, layout: charts }
    });

    const wrapper = mount(
      <Provider store={store}>
        <SimpleDashboardContainer renderChart={renderChart} pageId={pageId}/>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  })

});