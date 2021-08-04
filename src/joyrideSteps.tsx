import { Step } from "react-joyride";
import Typography from "@material-ui/core/Typography";
import React from "react";

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
];

export default steps;
