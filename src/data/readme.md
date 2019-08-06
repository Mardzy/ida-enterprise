# Welcome to the business logic folder

Imagine a situation when you do something dumb, then your partner jokingly points out
who the "stupid" one and who the "smart" one is in the relationship. That is the exact
pattern we want to follow here: keep the UI dumb and leave the smartness to others.

![Pinky and The Brain](../documentation/images/pinky-and-the-brain.jpg "Pinky and The Brain")
 
This is supposed to be the place where you start putting those files which make your 
application smart. Let's call this **the brain** of the application.

## Structuring

In order to not drown in the mess of the application files, this folder shall be scaled
with a feature-first approach. Each feature gets their own folder then we put all the
actions, reducers, selectors, etc. in there in harmony with the redux-ducks pattern.

A duck (or feature) folder **must**:

* contain the entire logic for handling only ONE concept in your app, eg. product, cart, session, etc.
* have an index.js file that exports according to the original duck rules (see https://github.com/erikras/ducks-modular-redux)
* keep code with similar purpose in the same file, such as reducers, selectors, and actions
* contain the tests related to the duck

See the `_example` folder for more.

### Keep in mind

**The Brain never imports from Pinky!** This way we can keep our concerns separated, and
refactoring the UI will be much easier.

## Aliases

Webpack is set to work with aliases, so whenever you import from this folder, feel free
to use the following snytax:

```import defaultReducer, { namedAction1, namedMember2 } from "data/my-feature";```