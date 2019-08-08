import MAP_DATA from "../__data__/farms";
import Markers from "../map";

describe("The Leaflet map with farms", () => {

  it("renders the data unclustered", () => {
    const wrapper = mount(<Markers data={MAP_DATA} clustered={false}/>);

    // expect(toJson(wrapper)).toMatchSnapshot();
  });

});

