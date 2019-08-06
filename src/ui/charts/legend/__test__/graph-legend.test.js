import _ from "lodash";
import { fromJS } from "immutable";

import GraphLegend from "../graph-legend";
import { ColorPalette } from "../../palette";
import { GRAPH_PALETTE } from "../../../style/colors";

const items = fromJS([{
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

describe("The graph legend", () => {

  it("renders a list of legend items", () => {
    const palette = new ColorPalette(_.values(GRAPH_PALETTE), { randomized: false });

    const wrapper = mount(
      <GraphLegend items={items} palette={palette}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the given column count", () => {
    const palette = new ColorPalette(_.values(GRAPH_PALETTE), { randomized: false });

    const wrapper = mount(
      <GraphLegend items={items} columns={5} palette={palette}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders legends with different column count", () => {
    const paletteOne = new ColorPalette(_.values(GRAPH_PALETTE), { randomized: false });
    const paletteTwo = new ColorPalette(_.values(GRAPH_PALETTE), { randomized: false });

    const wrapper = mount(
      <div>
        <GraphLegend items={items} columns={3} palette={paletteOne}/>
        <GraphLegend items={items} columns={5} palette={paletteTwo}/>
      </div>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});