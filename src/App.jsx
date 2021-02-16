import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useImmer } from "use-immer";
import Frame from "./Frame";

const Page = {
  Home: function () {
    return <h1>HOME</h1>;
  },
  Tasks: function () {
    return <h1>TASKS</h1>;
  },
  About: function () {
    return <h1>ABOUT</h1>;
  },
};

function App() {
  let [G, setG] = useImmer({
    theme: { dark: true },
    site: {
      sections: [
        { key: "home", text: "Home" },
        { key: "tasks", text: "Tasks" },
        { key: "about", text: "About" },
      ],
    },
  });
  return (
    <Frame.Layout
      G={G}
      M={{ setG }}
      content={
        <Switch>
          <Route path="/home">
            <Page.Home></Page.Home>
          </Route>
          <Route path="/tasks">
            <Page.Tasks></Page.Tasks>
          </Route>
          <Route path="/about">
            <Page.About></Page.About>
          </Route>
        </Switch>
      }
    ></Frame.Layout>
  );
}

export default App