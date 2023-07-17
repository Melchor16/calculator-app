export default function Button({
  children,
  className,
  currentTheme,
  mainCalculation,
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
        onClick={(e) => mainCalculation(e.target.value)}
        value={children === "x" ? "*" : children}
      >
        {children}
      </button>
    </div>
  );
}
