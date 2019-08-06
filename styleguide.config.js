const _ = require("lodash");
const path = require("path");

module.exports = {
  skipComponentsWithoutExample: true,

  components: "src/ui/**/*.js",

  require: [
    "semantic-ui-css/semantic.min.css",
    "./tools/styleguide/styleguidist-overrides.css"
  ],

  theme: {
    color: {
      codeComment: "#6d6d6d",
      codePunctuation: "#999",
      codeProperty: "#905",
      codeDeleted: "#905",
      codeString: "#690",
      codeInserted: "#690",
      codeOperator: "#9a6e3a",
      codeKeyword: "#1673b1",
      codeFunction: "#DD4A68",
      codeVariable: "#e90"
    }
  },

  styleguideComponents: {
    Wrapper: path.join(__dirname, "tools/styleguide/styleguide-wrapper")
  },

  getExampleFilename (componentPath) {
    return componentPath.replace(/\.js?$/, ".examples.md");
  }
};