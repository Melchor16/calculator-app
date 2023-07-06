import Screen from "./modules/Screen";
import ToggleTitle from "./modules/ToggleTitle";
import Keyboard from "./modules/Keyboard";
import { useState } from "react";

const themes = {
  theme1: {
    mainColor: "hsl(222, 26%, 31%)",
    keypadBg: "hsl(223, 31%, 20%)",
    screenBg: "hsl(224, 36%, 15%)",
    normalKeyBg: "hsl(30, 25%, 89%)",
    delKeyBg: "hsl(225, 21%, 49%)",
    eqKeyBg: "hsl(6, 63%, 50%)",
    textColor: "hsl(221, 14%, 31%)",
    screenText: "white",
    numShadow: "hsl(28, 16%, 65%)",
    delShadow: "hsl(224, 28%, 35%)",
    eqShadow: "hsl(6, 70%, 34%)",
  },
  theme2: {
    mainColor: "hsl(0, 0%, 90%)",
    keypadBg: "hsl(0, 5%, 81%)",
    screenBg: "hsl(0, 0%, 93%)",
    normalKeyBg: "hsl(45, 7%, 89%)",
    delKeyBg: "hsl(185, 42%, 37%)",
    eqKeyBg: "hsl(25, 98%, 40%)",
    textColor: "hsl(60, 10%, 19%)",
    screenText: "hsl(60, 10%, 19%)",
    numShadow: "hsl(35, 11%, 61%)",
    delShadow: "hsl(185, 58%, 25%)",
    eqShadow: "hsl(25, 99%, 27%)",
  },
  theme3: {
    mainColor: "hsl(268, 75%, 9%)",
    keypadBg: "hsl(268, 71%, 12%)",
    screenBg: "hsl(268, 71%, 12%)",
    normalKeyBg: "hsl(268, 47%, 21%)",
    delKeyBg: "hsl(281, 89%, 26%)",
    eqKeyBg: "hsl(176, 100%, 44%)",
    textColor: "hsl(52, 100%, 62%)",
    screenText: "hsl(52, 100%, 62%)",
    numShadow: "hsl(290, 70%, 36%)",
    delShadow: "hsl(285, 91%, 52%)",
    eqShadow: "hsl(177, 92%, 70%)",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.theme1);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);
  const [keyboardMessage, setKeyboardaMessagge] = useState(1);

  setTimeout(() => {
    setKeyboardaMessagge(0);
  }, 5000);

  return (
    <div
      className="background"
      style={{ backgroundColor: currentTheme.mainColor }}
    >
      <div className="calculator">
        <ToggleTitle
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
        />
        <Screen
          currentTheme={currentTheme}
          setOperation={setOperation}
          operation={operation}
          result={result}
          setResult={setResult}
          keyboardMessage={keyboardMessage}
        />
        <Keyboard
          currentTheme={currentTheme}
          operation={operation}
          setOperation={setOperation}
          setResult={setResult}
        />
      </div>
    </div>
  );
}

export default App;
