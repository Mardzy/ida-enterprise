```js
const Immutable = require("immutable");
const ColorPalette = require("ui/charts/palette").ColorPalette;

const items = Immutable.fromJS([{
  label: "Lorem ipsum dolor"
}, {
  label: "Diam sapien",
  value: "$54,234"
}, {
  label: "Pellentesque"
}, {
  label: "Amet diam",
  value: "Some"
}, {
  label: "Ulnam vitae"
}, {
  label: "Ipsum dolor"
}, {
  label: "Sapien diam",
}, {
  label: "Pellentesque amet"
}, {
  label: "Diam dolor sapien",
}, {
  label: "Vitae ulnam"
}]);

const palette = new ColorPalette([
  "#e53935",
  "#D81B60",
  "#8E24AA",
  "#5E35B1",
  "#3949AB",
  "#1E88E5",
  "#039BE5",
  "#00ACC1",
  "#43A047",
  "#7CB342",
  "#C0CA33",
  "#FDD835",
  "#FFB300",
  "#FB8C00",
  "#F4511E"
]);

<GraphLegend items={items} columns={3} palette={palette}/>
```