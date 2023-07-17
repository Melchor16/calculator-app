export default function Screen({
  currentTheme,
  operation,
  keyboardMessage,
  mainCalculation,
}) {
  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => mainCalculation(e.key)}
      style={{ backgroundColor: currentTheme.screenBg }}
      className="screen"
    >
      <h2 style={{ opacity: keyboardMessage }}>
        Click on the screen to use your keyboard
      </h2>

      <p style={{ color: currentTheme.screenText }}>{operation}</p>
    </div>
  );
}
