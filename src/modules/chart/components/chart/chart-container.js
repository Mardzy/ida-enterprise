import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withProps } from "recompose";

import Chart from "./chart";
import Graph from "../graph";

const Connected = connect(
  (state, ownProps) => _.pick(state.getIn(["charts", ownProps.id.toString()]).toObject(), "title", "config")
)(Chart);

const Composed = withProps(ownProps => ({
  renderGraph: () => <Graph chartId={ownProps.id} />
}))(Connected);

export default Composed;