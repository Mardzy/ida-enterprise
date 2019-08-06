```js
const data = require("./__data__/timeline").default;
const ColorPalette = require("ui/charts/palette").ColorPalette;

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

<LineGraph data={data} palette={palette}/>
```