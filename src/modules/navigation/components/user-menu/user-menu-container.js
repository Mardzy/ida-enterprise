import _ from "lodash";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import authActions from "../../../../data/auth/actions";
import { actionsResolved } from "../../../../data/async/utils";
import { authTypes } from "../../../../data/auth";

import UserMenu from "./user-menu";
import { getUsername } from "../../utils/user";

/**
 * Tells whether the user object is being loaded.
 * @param state
 * @return {boolean}
 */
const isLoading = state => !actionsResolved(state, [authTypes.REQUEST_USER]);

export default compose(
  connect(state => ({
    user: state.getIn(["auth", "user"]),
    isLoading: isLoading(state)
  }), dispatch => ({
    /**
     * Fetch user by passing an email.
     * @param username
     * @return {*}
     */
    fetchUser: _.once(username => dispatch(authActions.requestUser.start(username))),

    /**
     * Log the user out
     * @return {*}
     */
    onLogoutClicked: () => dispatch(authActions.logout())
  })),
  lifecycle({
    /**
     * Fecth user as soon as we know the component will mount.
     * If the user ID is not set, we can savely assume it needs to be fetched.
     */
    componentWillMount () {
      if (this.props.isLoading) {
        this.props.fetchUser(getUsername(this.props.user));
      }
    }
  })
)(UserMenu);