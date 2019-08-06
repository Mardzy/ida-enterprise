import KPI_DATA from "../__data__/kpis";
import KPIGraph from "../kpi";

describe("The KPI graph", () => {

  it("renders the data", () => {
    const wrapper = mount(<KPIGraph data={KPI_DATA}/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});