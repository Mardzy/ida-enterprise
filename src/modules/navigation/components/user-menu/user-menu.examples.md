Displaying a user menu given the user information

```js
const Immutable = require("immutable");
const Menu = require("semantic-ui-react").Menu;

const user = Immutable.fromJS({
  givenName: "Sandor",
  surName: "Kocsis"
});

<Menu vertical fluid>
  <UserMenu user={user}/>
</Menu>
```

Loading state

```js
const Immutable = require("immutable");
const Menu = require("semantic-ui-react").Menu;

const user = Immutable.fromJS({
  givenName: "Sandor",
  surName: "Kocsis"
});

<Menu vertical fluid>
  <UserMenu user={user} isLoading/>
</Menu>
```