import loadable from "@loadable/component";

export default loadable(() => import(/* webpackChunkName: "main-menu" */ "./components/main-menu"));