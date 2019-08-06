import React from "react";
import { Switch, Route } from "react-router";

import ContentWithSidebar from "../../../ui/layout/content-with-sidebar";

import Chart from "../../../modules/chart";
import Dashboard from "../../../modules/chart-group";
import MainMenu from "../../../modules/navigation";

/**
 * Render a chart.
 * @param {*} chartId
 * @return {*}
 */
const renderChart = chartId => <Chart key={chartId} id={chartId}/>;

/**
 * Render nested routes.
 * @return {*}
 */
const renderContent = () => (
  <Switch>
    <Route render={() => <Dashboard pageId="dashboard" renderChart={renderChart}/>}/>
  </Switch>
);

/**
 * Render main menu on sidebar.
 * @return {*}
 */
const renderSidebar = () => <MainMenu/>;

/**
 * Page wrapper with navigation.
 * @type {ReactComponent}
 */
const WrapperWithNavigation = () => <ContentWithSidebar padded sidebar={renderSidebar} content={renderContent}/>;

export default WrapperWithNavigation;
