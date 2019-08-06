import _ from "lodash";

/**
 * Get an { id: { title, config } } shape of any page layout.
 * @param layout
 */
export const getChartsOfPage = layout => {
  const charts = _.concat(..._.values(layout));

  return charts.reduce((result, chart) => {
    result[chart.id] = _.pick(chart, "title", "config");

    return result;
  }, {});
};

/**
 * Gets the chart references on a page by flattening the layout a bit.
 * @param layout
 * @return {Object}
 */
export const getChartReferencesOfPage = layout => _.mapValues(layout, getChartReferencesOfSection);

/**
 * Get the chart references in a section.
 * @param section
 */
export const getChartReferencesOfSection = section => section.map(chart => chart.id);