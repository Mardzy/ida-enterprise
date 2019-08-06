import loadable from "@loadable/component";

export default loadable(() => import(/* webpackChunkName: "dashboard" */ "./components/dashboard"));