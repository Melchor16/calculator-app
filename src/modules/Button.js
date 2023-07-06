export default function Button({
  children,
  className,
  currentTheme,
  operation,
  setOperation,
  setResult,
}) {
  const numberKey = {
    color: currentTheme.textColor,
    backgroundColor: currentTheme.normalKeyBg,
    boxShadow: `-2px -3.5px 1px 0px ${currentTheme.numShadow} inset`,
  };
  const delResKey = {
    color: "white",
    backgroundColor: currentTheme.delKeyBg,
    boxShadow: `-2px -3.5px 1px 0px ${currentTheme.delShadow} inset`,
  };
  const eqKey = {
    color: "white",
    backgroundColor: currentTheme.eqKeyBg,
    boxShadow: `-2px -3.5px 1px 0px ${currentTheme.eqShadow} inset`,
  };

  function handleButtonClick(e) {
    if (
      e.target.value === "+" ||
      e.target.value === "-" ||
      e.target.value === "x" ||
      e.target.value === "/"
    ) {
      setOperation((op) => op + " " + e.target.value + " ");
    } else if (e.target.value === "DEL") {
      setOperation((op) => op.slice(0, -1));
    } else if (e.target.value === "RESET") {
      setOperation("");
      setResult(0);
    } else if (e.target.value === "=") {
      setResult(eval(operation));
    } else {
      setOperation((op) => op + e.target.value);
    }
  }

  return (
    <div className={` ${className}`}>
      <button
        style={
          className === "number"
            ? numberKey
            : className === "delete" || className === "reset"
            ? delResKey
            : eqKey
        }
        onClick={(e) => handleButtonClick(e)}
        value={children === "x" ? "*" : children}
      >
        {children}
      </button>
    </div>
  );
}
