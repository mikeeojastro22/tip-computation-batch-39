import "./TipRateSelector.css";

function TipRateSelector(handleTipRate) {
  // 19. What does the line below do? Object Destructuring. handleOnChange is to be used.
  const { handleOnChange } = handleTipRate;
  return (
    <div className="tip-rate-style">
      <span>Tip Rate</span>
      {/* 
        20. What does this select element do? Shows a select element and lets the user choose the percentage for the tip
      */}
      <select id="tip-rate-selector" onChange={handleOnChange}>
        <option value="0.1">10%</option>
        <option value="0.15">15%</option>
        <option value="0.2">20%</option>
        <option value="0.3">30%</option>
      </select>
    </div>
  );
}

export default TipRateSelector;
