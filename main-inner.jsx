const React = require("react");

const ReactDOM = require("react-dom");

const App = require("./src/App").default;

const MainInner = function () {
  // :declare App React ReactDOM;
  ReactDOM.render(<App></App>, document.getElementById("app"));
};

const {hot} = require("react-hot-loader")
MainInner();
module.exports=hot(module)(App);