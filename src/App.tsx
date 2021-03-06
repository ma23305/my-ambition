import React, { useState } from "react";
import "./App.css";

import Slide from "./slide";
import steps from "./joyrideSteps";

import Joyride, { CallBackProps, STATUS, ACTIONS, EVENTS } from "react-joyride";

// 切り替えのために英語分定義
const localeEn = {
  back: "Back",
  close: "Close",
  last: "Last",
  next: "Next",
  open: "Open the dialog",
  skip: "Skip",
};

// 日本語用定義
const localeJa = {
  back: "戻る",
  close: "閉じる",
  last: "終わり",
  next: "次へ",
  skip: "スキップ",
};

function App() {
  const [run, setRun] = useState(false); // Joyrideのトリガー
  const [open, setOpen] = useState(false); // モーダル用
  const [stepIndex, setStepIndex] = useState(0); // Joyrideインデックス

  // コールバック関数
  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    const nextStatuses: string[] = [EVENTS.STEP_AFTER];

    if (nextStatuses.includes(type)) {
      // インデックスのインクリメント
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));

      // 終わり・スキップボタン押したときの処理
    } else if (finishedStatuses.includes(status)) {
      setRun(false);
      setOpen(false);
    }

    // モーダルを出した時の処理
    if (EVENTS.TARGET_NOT_FOUND === type && index === 13) {
      setRun(false); // 一度Joyrideを切る
      setOpen(true); // モーダルを出す
      setStepIndex(13); // indexを指定し直す
      // モーダルが出た状態で再びJoyrideを起動
      setTimeout(() => {
        setRun(true);
      }, 400);
    }

    // モーダル閉じる
    if (index === 14) {
      setOpen(false);
    }

    console.groupCollapsed(type);
    console.log(data);
    console.groupEnd();
  };

  return (
    <div className="App">
      <Slide setRun={setRun} open={open} />
      <Joyride
        callback={handleJoyrideCallback}
        run={run}
        steps={steps}
        stepIndex={stepIndex}
        locale={stepIndex < 8 ? localeEn : localeJa} // localeのところで日本語になるように
        continuous={true}
        scrollToFirstStep={true}
        showProgress={true}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: stepIndex < 9 ? "#f04" : "#0fbe94", // colorのところで色が変わるように
          },
        }}
      />
    </div>
  );
}

export default App;
