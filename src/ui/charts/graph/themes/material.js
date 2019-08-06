import { assign } from "lodash";

/**
 * @type {string}
 */
const yellow200 = "#FFF59D";

/**
 * @type {string}
 */
const deepOrange600 = "#F4511E";

/**
 * @type {string}
 */
const lime300 = "#DCE775";

/**
 * @type {string}
 */
const lightGreen500 = "#8BC34A";

/**
 * @type {string}
 */
const teal700 = "#00796B";

/**
 * @type {string}
 */
const cyan900 = "#006064";

/**
 * @type {*[]}
 */
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900
];

/**
 * @type {string}
 */
const blueGrey50 = "#ECEFF1";

/**
 * @type {string}
 */
const blueGrey300 = "#90A4AE";

/**
 * @type {string}
 */
const blueGrey700 = "#455A64";

/**
 * @type {string}
 */
const grey900 = "#212121";

/**
 * @type {string}
 */
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";

/**
 * @type {string}
 */
const letterSpacing = "normal";

/**
 * @type {number}
 */
const fontSize = 12;

/**
 * @type {number}
 */
const padding = 10;

/**
 * @type {{width: number, height: number, padding: number}}
 */
const baseProps = {
  width: 600,
  height: 300,
  padding: 30
};

/**
 * @type {{
 *   fontFamily: string,
 *   fontSize: number,
 *   letterSpacing: string,
 *   padding: number,
 *   fill: string,
 *   stroke: string,
 *   strokeWidth: number
 * }}
 */
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0
};

/**
 * @type {{
 *   fontFamily: string,
 *   fontSize: number,
 *   letterSpacing: string,
 *   padding: number,
 *   fill: string,
 *   stroke: string,
 *   strokeWidth: number,
 *   textAnchor: string
 * }}
 */
const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

/**
 * @type {string}
 */
const strokeDasharray = "10, 5";

/**
 * @type {string}
 */
const strokeLinecap = "round";

/**
 * @type {string}
 */
const strokeLinejoin = "round";

export default {
  area: assign({
    style: {
      data: {
        fill: grey900
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "none",
        stroke: blueGrey50,
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: assign({}, baseLabelStyles, {
        fill: blueGrey700
      })
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: blueGrey700,
        padding,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  boxplot: assign({
    style: {
      max: { padding, stroke: blueGrey700, strokeWidth: 1 },
      maxLabels: baseLabelStyles,
      median: { padding, stroke: blueGrey700, strokeWidth: 1 },
      medianLabels: baseLabelStyles,
      min: { padding, stroke: blueGrey700, strokeWidth: 1 },
      minLabels: baseLabelStyles,
      q1: { padding, fill: blueGrey700 },
      q1Labels: baseLabelStyles,
      q3: { padding, fill: blueGrey700 },
      q3Labels: baseLabelStyles
    },
    boxWidth: 20
  }, baseProps),
  candlestick: assign({
    style: {
      data: {
        stroke: blueGrey700
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: blueGrey700
    }
  }, baseProps),
  chart: baseProps,
  errorbar: assign({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  group: assign({
    colorScale: colors
  }, baseProps),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  },
  line: assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 3
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  pie: assign({
    colorScale: colors,
    style: {
      data: {
        padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, { padding: 20 })
    }
  }, baseProps),
  scatter: assign({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  stack: assign({
    colorScale: colors
  }, baseProps),
  tooltip: {
    style: assign({}, centeredLabelStyles, { padding: 5, pointerEvents: "none" }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: assign({}, centeredLabelStyles, { padding: 5, pointerEvents: "none" }),
      flyout: {
        stroke: grey900,
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    }
  }, baseProps)
};