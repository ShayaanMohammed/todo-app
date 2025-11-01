import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>Simple Calculator</h3>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "160px", height: "30px", textAlign: "right" }}
      />
      <br /><br />
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={() => handleClick(btn)}
          style={{ width: "35px", height: "35px", margin: "3px" }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Calculator;
