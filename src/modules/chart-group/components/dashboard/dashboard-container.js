import React from "react";
import { connect } from "react-redux";
import { compose, branch, renderComponent, createSink, lifecycle } from "recompose";

import SpinnerWithOverlay from "../../../../ui/loaders/spinner";
import actions from "../../../../data/pages/actions";
import { authTypes } from "../../../../data/auth";
import { pageTypes } from "../../../../data/pages";
import { actionsResolved } from "../../../../data/async/utils";

import Dashboard from "./dashboard";

/**
 * Tell whether the user info and the chart list is loaded.
 * @param state
 * @param ownProps
 * @return {boolean}
 */
const mayRender = (state, ownProps) =>
  actionsResolved(state, [authTypes.REQUEST_USER, { type: pageTypes.FETCH_CHART_LIST, unique: ownProps.pageId }]);

/**
 * Render a spinner with text.
 * @return {*}
 * @constructor
 */
const SpinnerWithText = () => <SpinnerWithOverlay>Loading charts</SpinnerWithOverlay>;

export default compose(
  /**
   * Connect the component to Redux.
   */
  connect((state, ownProps) => ({
    /**
     * @type {Immutable.Map}
     */
    sections: state.getIn(["pages", ownProps.pageId]),
    /**
     * @type {number}
     */
    customerId: state.getIn(["auth", "user", "customerID"]),
    /**
     * @type {boolean}
     */
    isLoading: !mayRender(state, ownProps)
  }), dispatch => ({
    /**
     * Fetch page data.
     * @param customerId
     * @param pageId
     * @return {*}
     */
    fetchData: (customerId, pageId) => dispatch(actions.fetchChartList.start(customerId, pageId))
  })),
  /**
   * Add life cycle methods externally for better unit testing.
   */
  lifecycle({
    /**
     * Fetch data when the customer id is for the first time available.
     * @param nextProps
     */
    componentWillReceiveProps (nextProps) {
      if (!this.props.customerId && nextProps.customerId) {
        this.props.fetchData(nextProps.customerId.customerId, this.props.pageId);
      }
    }
  }),
  /**
   * Render a spinner with text while the data is being fetched.
   */
  branch(props => props.isLoading, renderComponent(SpinnerWithText), renderComponent(Dashboard))
)(createSink());