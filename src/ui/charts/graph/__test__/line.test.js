import _ from "lodash";

import LineGraph from "../line";
import timeline from "../__data__/timeline"
import { ColorPalette } from "../../palette";
import { GRAPH_PALETTE } from "../../../style/colors";

describe("The line graph", () => {

  it("renders the passed data without errors", () => {
    const palette = new ColorPalette(_.values(GRAPH_PALETTE), { randomized: false });

    const wrapper = mount(
      <LineGraph data={timeline} palette={palette}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});