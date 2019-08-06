import { fromJS } from "immutable";

import { getUsername, getDisplayName } from "../user";

describe("The user util function", () => {

  it("getUsername retrieves a username from the user object", () => {
    const username = getUsername(fromJS({
      username: "sandor@connecterra.io"
    }));

    return expect(username).toMatchSnapshot();
  });

  it("getDisplayName retrieves a display name from the user object", () => {
    const username = getDisplayName(fromJS({
      givenName: "Sandor",
      surName: "Kocsis"
    }));

    return expect(username).toMatchSnapshot();
  });

});