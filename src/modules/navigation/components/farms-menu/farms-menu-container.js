import _ from "lodash";
import { connect } from "react-redux";
import { branch, compose, lifecycle, renderComponent, createSink, renderNothing } from "recompose";

import farmActions from "../../../../data/farms/actions";
import { actionsResolved } from "../../../../data/async/utils";
import { authTypes } from "../../../../data/auth";
import { farmTypes } from "../../../../data/farms";

import SubmenuWithLoader from "../../../../ui/navigation/subnav-with-loader";

/**
 * Tell whether the component may render.
 * @param state
 * @return {boolean}
 */
const mayRender = state => actionsResolved(state, [authTypes.REQUEST_USER, farmTypes.FETCH_FARM_LIST]);

export default compose(
  connect(state => ({
    items: state.getIn(["farms"]).toList(),
    customerId: state.getIn(["auth", "user", "customerID"]),
    isLoading: !mayRender(state)
  }), dispatch => ({
    /**
     * Fetch the list of farms on demand.
     * @param customerId
     * @return {*}
     */
    fetch: _.once(customerId => dispatch(farmActions.fetchFarmList.start(customerId)))
  })),
  lifecycle({
    /**
     * Call fetch once the customer id is available.
     * @param nextProps
     */
    componentWillReceiveProps (nextProps) {
      if (nextProps.customerId && nextProps.isLoading) {
        this.props.fetch(nextProps.customerId);
      }
    }
  }),
  branch(props => props.isLoading, renderNothing, renderComponent(SubmenuWithLoader))
)(createSink());