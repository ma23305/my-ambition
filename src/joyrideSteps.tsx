import React from "react";
import { Step } from "react-joyride";
import Typography from "@material-ui/core/Typography";

const steps: Step[] = [
  {
    disableBeacon: true,
    hideCloseButton: true,
    styles: {
      options: {
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
    hideCloseButton: true,
    styles: {
      options: {
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
            <Typography variant="h6" style={{ textAlign: "start" }}>
              ツール・システムの学習コストを減らせる
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
        <Typography variant="h6">新技術チームっぽくない？</Typography>
      </React.Fragment>
    ),
  },
  {
    disableBeacon: true,
    hideCloseButton: true,
    styles: {
      options: {
        width: "600px",
      },
    },
    target: "#reason",
    title: <Typography variant="h4">ちなみに「joyride」の意味は…</Typography>,
    content: (
      <React.Fragment>
        <Typography variant="h6">けっこうやばい意味らしい。</Typography>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          さあ、車をブッ飛ばしに行くぜ。
        </Typography>
        <Typography variant="h6">
          人生で一度は使ってみたいセリフランキング2位らしい…
        </Typography>
      </React.Fragment>
    ),
  },
  {
    disableBeacon: true,
    hideCloseButton: true,
    styles: {
      options: {
        width: "600px",
      },
    },
    target: "#usage",
    title: <Typography variant="h4">なんで？</Typography>,
    content: (
      <React.Fragment>
        <Typography variant="h6">
          長期的に使うものや使用頻度の高いものに
        </Typography>
        <Typography variant="h6">
          実装するのが効果的なんじゃないかなと思料
        </Typography>
        <Typography variant="h6">あまり使用頻度の高くない</Typography>
        <Typography variant="h6">申し込み画面には向かない感じ</Typography>
      </React.Fragment>
    ),
  },
  {
    disableBeacon: true,
    hideCloseButton: true,
    styles: {
      options: {
        width: "600px",
      },
    },
    target: "#setup",
    title: <Typography variant="h4">準備完了！</Typography>,
    content: (
      <React.Fragment>
        <Typography variant="h6">
          さぁ！ここからはドキュメントを読みながら
        </Typography>
        <Typography variant="h6">実際にコードを書いていこう♪</Typography>
      </React.Fragment>
    ),
  },
  {
    disableBeacon: true,
    hideCloseButton: true,
    styles: {
      options: {
        width: "600px",
      },
    },
    target: "#steps",
    title: <Typography variant="h4">Stepsって？</Typography>,
    content: (
      <React.Fragment>
        <Typography variant="h6">吹き出し1個1個の定義した変数</Typography>
        <Typography variant="h6">targetでどこにハイライトするか</Typography>
        <Typography variant="h6">contentで本文を指定する</Typography>
        <Typography variant="h6">
          他にもいろいろ指定できるので、必要に応じて追記しよう
        </Typography>
      </React.Fragment>
    ),
  },
  {
    disableBeacon: true,
    hideCloseButton: true,
    styles: {
      options: {
        width: "600px",
      },
    },
    target: "#moveJoyride",
    title: <Typography variant="h4">詳しく！</Typography>,
    content: (
      <React.Fragment>
        <Typography variant="h6">
          Stepsで定義したtargetが表示されるところに記述しよう。
        </Typography>
        <Typography variant="h6">(App.tsxとかindex.tsxが楽？)</Typography>
        <Typography variant="h6">
          runの値はボタン押下で切り替えよう！
        </Typography>
      </React.Fragment>
    ),
  },
];

export default steps;
