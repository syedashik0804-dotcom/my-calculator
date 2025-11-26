import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Helper function: format number nicely
  const formatNumber = (num) => {
    if (num === Infinity || num === -Infinity) return "Infinity";
    if (isNaN(num)) return "Error";

    const absNum = Math.abs(num);
    if ((absNum !== 0 && absNum < 0.001) || absNum >= 1e6) {
      // scientific notation for very small or very large numbers
      return num.toExponential(6);
    } else {
      // normal notation, remove trailing zeros
      return num.toFixed(6).replace(/\.?0+$/, "");
    }
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input); // simple eval
      setResult(formatNumber(evalResult));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h2>🧮 Scientific Calculator</h2>
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        {/* Row 1 */}
        <button onClick={handleClear} className="btn-red">C</button>
        <button onClick={handleBackspace} className="btn-red">←</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("/")} className="btn-operator">÷</button>

        {/* Row 2 */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")} className="btn-operator">×</button>

        {/* Row 3 */}
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")} className="btn-operator">−</button>

        {/* Row 4 */}
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")} className="btn-operator">+</button>

        {/* Row 5 */}
        <button onClick={() => handleClick("0")} className="btn-zero">0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleCalculate} className="btn-equal">=</button>

        {/* Scientific buttons */}
        <button onClick={() => handleClick("**2")} className="btn-scientific">x²</button>
        <button onClick={() => handleClick("**3")} className="btn-scientific">x³</button>
        <button onClick={() => handleClick("**(1/2)")} className="btn-scientific">√</button>
        <button onClick={() => handleClick("**(1/3)")} className="btn-scientific">∛</button>
      </div>
    </div>
  );
}

export default App;
