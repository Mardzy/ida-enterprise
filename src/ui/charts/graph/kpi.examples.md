```js
const data = require("./__data__/kpis").default;
const L = require("leaflet");

const fixLeafletIconPath = () => {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
};

fixLeafletIconPath();

<KPIGraph data={data}/>
```