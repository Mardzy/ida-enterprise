import { fromJS } from "immutable";

import UserMenu from "../user-menu";

describe("The user menu", () => {

  it("renders 3 dots while loading", () => {
    const user = fromJS({
      username: "sandor@connecterra.io"
    });

    const wrapper = mount(<UserMenu user={user} isLoading/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the user's full name", () => {
    const user = fromJS({
      givenName: "Sandor",
      surName: "Kocsis"
    });

    const wrapper = mount(<UserMenu user={user}/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});