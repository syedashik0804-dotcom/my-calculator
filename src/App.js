import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const press = (val) => {
    setValue((prev) => prev + val);
  };

  const clearAll = () => setValue("");

  const backspace = () => {
    setValue(value.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch {
      setValue("Error");
    }
  };

  const sci = (fn) => {
    try {
      const num = parseFloat(value);
      if (isNaN(num)) return setValue("Error");

      let res = 0;

      if (fn === "sin") res = Math.sin(num);
      if (fn === "cos") res = Math.cos(num);
      if (fn === "tan") res = Math.tan(num);
      if (fn === "log") res = Math.log10(num);
      if (fn === "ln") res = Math.log(num);
      if (fn === "sqrt") res = Math.sqrt(num);
      if (fn === "pow2") res = Math.pow(num, 2);
      if (fn === "pow3") res = Math.pow(num, 3);

      setValue(res.toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calc-container">
      <div className="calculator">
        <input type="text" value={value} className="display" disabled />

        {/* Scientific Buttons */}
        <div className="sci-row">
          <button onClick={() => sci("sin")}>sin</button>
          <button onClick={() => sci("cos")}>cos</button>
          <button onClick={() => sci("tan")}>tan</button>
          <button onClick={() => sci("log")}>log</button>
          <button onClick={() => sci("ln")}>ln</button>
        </div>

        <div className="sci-row">
          <button onClick={() => sci("sqrt")}>√</button>
          <button onClick={() => sci("pow2")}>x²</button>
          <button onClick={() => sci("pow3")}>x³</button>
          <button onClick={backspace}>⌫</button>
          <button onClick={clearAll} className="clear">C</button>
        </div>

        {/* Normal Buttons */}
        <div className="grid">
          <button onClick={() => press("7")}>7</button>
          <button onClick={() => press("8")}>8</button>
          <button onClick={() => press("9")}>9</button>
          <button onClick={() => press("/")}>÷</button>

          <button onClick={() => press("4")}>4</button>
          <button onClick={() => press("5")}>5</button>
          <button onClick={() => press("6")}>6</button>
          <button onClick={() => press("*")}>×</button>

          <button onClick={() => press("1")}>1</button>
          <button onClick={() => press("2")}>2</button>
          <button onClick={() => press("3")}>3</button>
          <button onClick={() => press("-")}>-</button>

          <button onClick={() => press("0")}>0</button>
          <button onClick={() => press(".")}>.</button>
          <button onClick={calculate} className="equal">=</button>
          <button onClick={() => press("+")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
