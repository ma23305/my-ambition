import React, { useState } from "react";
import "./App.css";

import Slide from "./slide";
import steps from "./joyrideSteps";

import Joyride from "react-joyride";
// import Joyride, { CallBackProps, STATUS, ACTIONS, EVENTS } from "react-joyride";

const locale = {
  back: "戻る",
  close: "閉じる",
  last: "終わり",
  next: "次へ",
  skip: "スキップ",
};

function App() {
  const [run, setRun] = useState(false);
  return (
    <div className="App">
      <Slide setRun={setRun} />
      <Joyride
        // callback={handleJoyrideCallback}
        run={run}
        steps={steps}
        locale={locale}
        continuous={true}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: "#099",
          },
        }}
      />
    </div>
  );
}

export default App;
