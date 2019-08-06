import loadable from "@loadable/component";

export default loadable(() => import(/* webpackChunkName: "chart" */ "./components/chart"));