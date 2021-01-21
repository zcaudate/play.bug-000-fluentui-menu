const Theme = require("./theme").default

import React, { useState, useEffect } from "react";
import {
  HashRouter,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  Provider,
  Flex,
  Checkbox,
  Menu,
  tabListBehavior,
} from "@fluentui/react-northstar";

const Style = {
  Layout: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "3em auto",
    gridTemplateAreas: "'header' 'main'",
  },
  Body: { padding: "0.8em" },
};

function FrameHeader(props) {
  let { G, M } = props;
  let theme = Theme.get(G.theme.dark);
  let location = useLocation();
  return (
    <Flex style={Object.assign({ ...Style.Header }, props.style)}>
      <Menu
        defaultActiveIndex={0}
        items={G.site.sections
          .filter(function (sec) {
            return sec.connect ? G.connection.instance : true;
          })
          .map(function (sec) {
            return {
              key: sec.key,
              content: sec.text,
              style: { color: theme.siteVariables.bodyColor },
              href: "#/" + sec.key,
              active: location.pathname == "/" + sec.key,
            };
          })}
        underlined={true}
        style={{ padding: "0 8px", border: "none" }}
        accessibility={tabListBehavior}
      ></Menu>
      <Flex.Item push={true}>
        <Checkbox
          style={{ marginTop: "6px" }}
          checked={G.theme.dark}
          onClick={function () {
            M.setG(function (G) {
              G.theme.dark = !G.theme.dark;
            });
          }}
          toggle={true}
        ></Checkbox>
      </Flex.Item>
    </Flex>
  );
}

function FrameBody(props) {
  let { G, M } = props;
  let history = useHistory();
  useEffect(function () {
    if (history.location.pathname == "/") {
      history.push("/home");
    }
  });
  return (
    <div style={Object.assign({ ...Style.Body }, props.style)}>
      {props.content}
    </div>
  );
}

function FrameLayout(props) {
  let { G, M } = props;
  let theme = Theme.get(G.theme.dark);
  let { brand } = theme.siteVariables.colors;
  let topColor = brand[500];
  let bottomColor = brand[500];
  return (
    <HashRouter>
      <Provider theme={theme}>
        <div
          style={Object.assign({ ...Style.Layout }, props.style, {
            borderTop: "solid 4px " + topColor,
            borderBottom: "solid 4px " + bottomColor,
          })}
        >
          <FrameHeader style={{ gridArea: "header" }} G={G} M={M}></FrameHeader>
          <FrameBody
            style={{ gridArea: "main" }}
            G={G}
            M={M}
            content={props.content}
          ></FrameBody>
        </div>
      </Provider>
    </HashRouter>
  );
}

const MODULE = { Layout: FrameLayout, Body: FrameBody, Header: FrameHeader };

export default MODULE