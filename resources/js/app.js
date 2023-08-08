import "../css/app.css";
// Include CSS file
require("halfmoon/css/halfmoon-variables.min.css");
/*
  Or,
  Include the following (no variables, supports IE11):
  require("halfmoon/css/halfmoon.min.css");
*/

// Import JS library
const halfmoon = require("halfmoon");
window.addEventListener("load", () => {
  // Call this method after the DOM has been loaded
  halfmoon.onDOMContentLoaded();
});
