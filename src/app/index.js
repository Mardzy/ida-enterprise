import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import domReady from "domready";
import { AppContainer } from "react-hot-loader";

import { routes } from "./routes";
import store, { history, epicMiddleware } from "data/store";
import { Request } from "data/api/ajax";
import { fixLeafletIconPath } from "app/scaffolding/leaflet";

/**
 * Semantic UI styles.
 */
import "semantic-ui-css/semantic.min.css";

/**
 * Fix Leaflet.
 */
fixLeafletIconPath();

/**
 * Root element of the application.
 * @type {Element}
 */
const rootElement = document.querySelector("#app");

/**
 * Render the application to the DOM.
 * @param store
 * @param routes
 */
const render = (store, routes) => ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </Provider>
  </AppContainer>, rootElement
);

/**
 * Hook up hot module replacement.
 * Update on store and component changes.
 */
if (module.hot) {
  module.hot.accept([
    "../data/reducer",
    "../data/epic",
    "./routes"
  ], () => {
    const nextReducer = require("../data/reducer").rootReducer;
    const nextEpic = require("../data/epic").rootEpic;
    const nextRoutes = require("./routes").routes;

    store.replaceReducer(nextReducer);
    epicMiddleware.replaceEpic(nextEpic);

    render(store, nextRoutes);
  });
}

/**
 * Register the access token if it is available in the store.
 * We use localStorage for persistent app state, but this has to be taken care of manually.
 */
Request.registerToken(store.getState().getIn(["auth", "accessToken"]));

/**
 * Initial render.
 */
domReady(() => rootElement ? render(store, routes) : _.noop());