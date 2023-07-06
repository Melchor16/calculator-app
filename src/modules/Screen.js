export default function Screen({
  currentTheme,
  operation,
  setOperation,
  result,
  setResult,
  keyboardMessage,
}) {
  function handleKeyDown(e) {
    console.log(e.key);
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
      setOperation((op) => op + " " + e.key + " ");
    } else if (e.key === "Backspace") {
      setOperation((op) => op.slice(0, -1));
    } else if (e.key === "Escape") {
      setOperation("");
      setResult(0);
    } else if (e.key === "Enter") {
      setResult(eval(operation));
    } else if ((!isNaN(e.key) || e.key === ".") && e.key !== " ") {
      setOperation((op) => op + e.key);
    } else {
      return;
    }
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
      style={{ backgroundColor: currentTheme.screenBg }}
      className="screen"
    >
      <h2 style={{ opacity: keyboardMessage }}>
        Click on the screen to use your keyboard
      </h2>
      {result === 0 && (
        <p style={{ color: currentTheme.screenText }}>
          {operation === "" ? "0" : operation}
        </p>
      )}

      {result !== 0 && (
        <p style={{ color: currentTheme.screenText }}>
          {Number.isInteger(result) ? result : result.toFixed(4)}
        </p>
      )}
    </div>
  );
}
