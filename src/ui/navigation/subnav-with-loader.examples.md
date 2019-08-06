Display a list of menu items

```js
const Immutable = require("immutable");
const Menu = require("semantic-ui-react").Menu;
const items = Immutable.fromJS(["First", "Second", "Third"]);

const renderItem = item => (
  <Menu.Item>
    {item}
  </Menu.Item>  
);

<Menu vertical fluid>
  <SubmenuWithLoader header="Subnav with loader" renderItem={renderItem} items={items}/>
</Menu>
```

With loader

```js
const Immutable = require("immutable");
const Menu = require("semantic-ui-react").Menu;
const items = Immutable.fromJS(["First", "Second", "Third"]);

const renderItem = item => (
  <Menu.Item>
    {item}
  </Menu.Item>  
);

<Menu vertical fluid>
  <SubmenuWithLoader header="Subnav with loader" renderItem={renderItem} items={items} isLoading/>
</Menu>
```