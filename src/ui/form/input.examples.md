```js
const reduxForm = require("redux-form/immutable").reduxForm;

const Form = props => (
  <form className="ui form" action="javascript:;">
    <InputField name="any" label="Text field" placeholder="Start typing" type="text"/>
  </form>
);

const WrappedForm = reduxForm({ form: "input" })(Form);

<WrappedForm />
```