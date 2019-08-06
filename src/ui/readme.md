# Welcome to the UI folder

Imagine a situation when you do something dumb, then your partner jokingly points out
who the "stupid" one and who the "smart" one is in the relationship. That is the exact
pattern we want to follow here: keep the UI dumb and leave the smartness to others.

![Pinky and The Brain](../documentation/images/pinky-and-the-brain.jpg "Pinky and The Brain")
 
This is supposed to be the place where you start putting your user interface related files.

Let's call this **the skin** of the application, which we are able to shed off any time, 
just to grow a new one.

## Structuring

In order to not drown in the mess of the view files, this folder shall be scaled
in a function-first manner. Eg. layouts, pages, modals, etc. In these folders you may
introduce a feature-first approach (probably in harmony with ```src/the-brain/```) for the 
sake of simplicity.

## Aliases

Webpack is set to work with aliases, so whenever you import from this folder, feel free
to use the following snytax:

```import defaultMember, { namedMemeber1, namedMember2 } from "ui/component-name";```