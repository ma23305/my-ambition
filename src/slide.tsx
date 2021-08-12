import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  slide: {
    minHeight: "95vh",
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
  title: {
    marginBottom: theme.spacing(10),
  },
  subTitle: {
    textDecoration: "underline",
  },
  content: {
    margin: theme.spacing(5, 15),
  },
  code: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: theme.spacing(1),
    "& > h3": {
      fontFamily:
        'MeiryoKe_Gothic, "Ricty Diminished", "Osaka－等幅", "Osaka-等幅", Osaka-mono, "ＭＳ ゴシック", "MS Gothic", "Courier New", Courier, Monaco, Menlo, Consolas, "Lucida Console", monospace',
    },
  },
}));

const Slide = (props: Props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.slide}>
        <div id="title" className={classes.title}>
          <Typography variant="h1">React-Joyrideを</Typography>
          <Typography variant="h1">システムに実装したい</Typography>
        </div>
        <Typography variant="h4">ma23305</Typography>
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
        <div className={classes.content} id="reason">
          <Typography variant="h5">
            Hey, come on! We gonna go for a joyride.
          </Typography>
        </div>
      </div>

      <div className={classes.slide}>
        <div id="usage">
          <Typography variant="h2" className={classes.subTitle}>
            効果的な使い方
          </Typography>
          <div className={classes.content}>
            <Typography variant="h3">・新機能の使い方紹介</Typography>
            <Typography variant="h3">・システムの機能紹介</Typography>
          </div>
        </div>
      </div>

      <div className={classes.slide}>
        <div id="setup">
          <Typography variant="h2" className={classes.subTitle}>
            導入方法
          </Typography>
          <div className={classes.content}>
            <div className={classes.code}>
              <Typography variant="h3">npm i react-joyride</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.slide}>
        <div id="steps">
          <Typography variant="h2" className={classes.subTitle}>
            Stepsを定義しよう
          </Typography>
          <div className={classes.content}>
            <div className={classes.code}>
              <Typography variant="h3">{"steps: ["}</Typography>
              <Typography variant="h3">{"　{"}</Typography>
              <Typography variant="h3">
                {"　　target: '.my-first-step',"}
              </Typography>
              <Typography variant="h3">
                {"　　content: 'This is my awesome feature!',"}
              </Typography>
              <Typography variant="h3">{"　},"}</Typography>
              <Typography variant="h3">{"　..."}</Typography>
              <Typography variant="h3">{"]"}</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.slide}>
        <div id="moveJoyride">
          <Typography variant="h2" className={classes.subTitle}>
            React-Joyrideを動かそう
          </Typography>
          <div className={classes.content}>
            <div className={classes.code}>
              <Typography variant="h3">
                {"const [run, setRun] = useState(false);"}
              </Typography>
              <Typography variant="h3">{"return ("}</Typography>
              <Typography variant="h3">{"　<Joyride"}</Typography>
              <Typography variant="h3">
                {"　　run={run}　　　　// Joyride起動する/しない"}
              </Typography>
              <Typography variant="h3">
                {"　　steps={steps}　　// さっき定義したstepsを渡す"}
              </Typography>
              <Typography variant="h3">{"　　..."}</Typography>
              <Typography variant="h3">{"　/>"}</Typography>
              <Typography variant="h3">{")"}</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.slide}>
        <div id="locale">
          <Typography variant="h2" className={classes.subTitle}>
            日本語化しよう
          </Typography>
          <div className={classes.content}>
            <div className={classes.code}>
              <Typography variant="h3">{"locale = {"}</Typography>
              <Typography variant="h3">{'　back: "戻る",'}</Typography>
              <Typography variant="h3">{'　close: "閉じる",'}</Typography>
              <Typography variant="h3">{'　last: "終わり",'}</Typography>
              <Typography variant="h3">{'　next: "次へ",'}</Typography>
              <Typography variant="h3">{'　skip: "スキップ"'}</Typography>
              <Typography variant="h3">{"}"}</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.slide}>
        <div id="color">
          <Typography variant="h2" className={classes.subTitle}>
            色を変えよう
          </Typography>
          <div className={classes.content}>
            <div className={classes.code}>
              <Typography variant="h3">{"<Joyride"}</Typography>
              <Typography variant="h3">{"　styles={{"}</Typography>
              <Typography variant="h3">{"　　options: {"}</Typography>
              <Typography variant="h3">
                {'　　　primaryColor: "#0fbe94",'}
              </Typography>
              <Typography variant="h3">{"　　}"}</Typography>
              <Typography variant="h3">{"　}}"}</Typography>
              <Typography variant="h3">{"/>"}</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.slide}>
        <div id="customize">
          <Typography variant="h2" className={classes.subTitle}>
            もっと細かくカスタマイズしよう
          </Typography>
          <div className={classes.content}>
            <div className={classes.code}>
              <Typography variant="h3">{"<Joyride"}</Typography>
              <Typography variant="h3">
                {"　callback={handleJoyrideCallback}"}
              </Typography>
              <Typography variant="h3">{"　..."}</Typography>
              <Typography variant="h3">{"/>"}</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.slide}>
        <Typography variant="h2" className={classes.subTitle}>
          コールバック関数をもっと詳しく
        </Typography>
        <div className={classes.content}>
          <div className={classes.code}>
            <Typography variant="h3" id="joyride-import">
              {"import { CallBackProps, STATUS, ACTIONS, EVENTS }"}
              <br />
              {"　from 'react-joyride';"}
            </Typography>
            <Typography variant="h3">{"　"}</Typography>
            <Typography variant="h3">
              {"const handleJoyrideCallback = (data: CallBackProps) => {"}
            </Typography>
            <Typography variant="h3">
              {"　const { action, index, status, type } = data;"}
            </Typography>
            <Typography variant="h3" id="callback-sample">
              {"　const finishedStatuses: string[]"}
              <br />
              {"　　 = [STATUS.FINISHED, STATUS.SKIPPED];"}
              <br />
              <br />
              {"　if (finishedStatuses.includes(status)) {"}
              <br />
              {"　　setRun(false);"}
              <br />
              {"　}"}
            </Typography>
            <Typography variant="h3">{"}"}</Typography>
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
