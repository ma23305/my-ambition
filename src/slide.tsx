import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  slide: {
    height: "95vh",
    color: "#fff",
    textAlign: "start",
    padding: theme.spacing(3),
  },
  bottonPosition: {
    marginTop: theme.spacing(10),
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: theme.spacing(45),
    backgroundColor: theme.palette.common.white,
    color: "#0fbe94",
  },
  subTitle: {
    textDecoration: "underline",
  },
  content: {
    margin: theme.spacing(5, 5),
  },
}));

const Slide = (props: Props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.slide}>
        <div id="title">
          <Typography variant="h1">React-Joyrideを</Typography>
          <Typography variant="h1">システムに実装したい</Typography>
        </div>
        <div className={classes.bottonPosition}>
          <Button
            variant="contained"
            disableElevation
            className={classes.button}
            onClick={() => {
              props.setRun(true);
            }}
          >
            <Typography variant="h2">START</Typography>
          </Button>
        </div>
      </div>
      <div className={classes.slide}>
        <div id="overview">
          <Typography variant="h2" className={classes.subTitle}>
            React-Joyrideとは
          </Typography>
          <div className={classes.content}>
            <Typography variant="h3">
              スマホゲームのようなチュートリアルを
            </Typography>
            <Typography variant="h3">簡単に実装できるライブラリ</Typography>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

type Props = {
  setRun: Function;
};

export default Slide;
