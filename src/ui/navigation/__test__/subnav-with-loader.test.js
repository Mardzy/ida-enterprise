import { fromJS } from "immutable";
import { Menu } from "semantic-ui-react";

import SubmenuWithLoader from "../subnav-with-loader";

describe("The submenu with loader", () => {

  it("displays an inline loader", () => {
    const wrapper = mount(<SubmenuWithLoader header="Some header" isLoading/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders a list of items", () => {
    const wrapper = mount(<SubmenuWithLoader header="Some header"
                                             items={fromJS([1,2,3])}
                                             renderItem={item => <Menu.Item key={item}>{item}</Menu.Item>}/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});