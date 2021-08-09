import React, { useState } from "react";
import "./App.css";

import Slide from "./slide";
import steps from "./joyrideSteps";

// eslint-disable-next-line
import Joyride, { CallBackProps, STATUS, ACTIONS, EVENTS } from "react-joyride";

const localeEn = {
  back: "Back",
  close: "Close",
  last: "Last",
  next: "Next",
  open: "Open the dialog",
  skip: "Skip",
};

const localeJa = {
  back: "戻る",
  close: "閉じる",
  last: "終わり",
  next: "次へ",
  skip: "スキップ",
};

function App() {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyrideCallback = (data: CallBackProps) => {
    // eslint-disable-next-line
    const { action, index, status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
    }

    setStepIndex(index);
  };

  return (
    <div className="App">
      <Slide setRun={setRun} />
      <Joyride
        callback={handleJoyrideCallback}
        run={run}
        steps={steps}
        locale={stepIndex < 7 ? localeEn : localeJa} // localeのところで日本語になるように
        continuous={true}
        scrollToFirstStep={true}
        showProgress={true}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: stepIndex < 8 ? "#f04" : "#0fbe94", // colorのところで色が変わるように
          },
        }}
      />
    </div>
  );
}

export default App;
