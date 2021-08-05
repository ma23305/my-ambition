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

// eslint-disable-next-line
const localeJa = {
  back: "戻る",
  close: "閉じる",
  last: "終わり",
  next: "次へ",
  skip: "スキップ",
};

function App() {
  const [run, setRun] = useState(false);
  // eslint-disable-next-line
  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyrideCallback = (data: CallBackProps) => {
    // eslint-disable-next-line
    const { action, index, status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
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
        locale={localeEn}
        continuous={true}
        scrollToFirstStep={true}
        showProgress={true}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: "#f04",
          },
        }}
      />
    </div>
  );
}

export default App;
