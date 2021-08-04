import React from "react";
import { Step } from "react-joyride";
import Typography from "@material-ui/core/Typography";

const steps: Step[] = [
  {
    disableBeacon: true,
    styles: {
      options: {
        zIndex: 10000,
        width: "600px",
      },
    },
    target: "#title",
    title: <Typography variant="h4">という野望を叶えるために...</Typography>,
    content: (
      <React.Fragment>
        <Typography variant="h6">
          責任を持ってReact-Joyrideを触ってみたので、
        </Typography>
        <Typography variant="h6">皆さんに共有したいの会</Typography>
      </React.Fragment>
    ),
  },
  {
    disableBeacon: true,
    styles: {
      options: {
        zIndex: 10000,
        width: "600px",
      },
    },
    target: "#overview",
    title: <Typography variant="h4">なぜ使いたいのか</Typography>,
    content: (
      <React.Fragment>
        <ul>
          <li>
            <Typography variant="h6" style={{ textAlign: "start" }}>
              使ったことがないから
            </Typography>
          </li>
          <li>
            <Typography variant="h6" style={{ textAlign: "start" }}>
              便利そうだから
            </Typography>
          </li>
          <li>
            <Typography
              variant="h6"
              style={{ textAlign: "start", fontWeight: "bold" }}
            >
              びっくりしてもらえそうだから
            </Typography>
          </li>
        </ul>
      </React.Fragment>
    ),
  },
];

export default steps;
