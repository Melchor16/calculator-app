export default function ToggleTitle({ currentTheme, setCurrentTheme, themes }) {
  function handleSetTheme(e) {
    if (e.target.value === "1") {
      setCurrentTheme(themes.theme1);
    } else if (e.target.value === "2") {
      setCurrentTheme(themes.theme2);
    } else {
      setCurrentTheme(themes.theme3);
    }
  }

  return (
    <div className="title-box">
      <h1 style={{ color: currentTheme.screenText }}>calc</h1>
      <div className="theme-selector">
        <div className="theme-number">
          <p style={{ color: currentTheme.screenText }}>1</p>
          <p style={{ color: currentTheme.screenText }}>2</p>
          <p style={{ color: currentTheme.screenText }}>3</p>
        </div>
        <label for="theme-selector" style={{ display: "none" }}>
          Theme selector
        </label>
        <input
          id="theme-selector"
          onChange={(e) => handleSetTheme(e)}
          type="range"
          defaultValue="1"
          min="1"
          max="3"
        />
      </div>
    </div>
  );
}
