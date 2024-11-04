// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleEqualClick = () => {
    try {
      const evaluatedResult = eval(input);
      setResult(evaluatedResult);
      setInput(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result}</div>
        <div className="input">{input || '0'}</div>
      </div>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleButtonClick(num.toString())}>
            {num}
          </button>
        ))}
        {['+', '-', '*', '/'].map((operator) => (
          <button key={operator} onClick={() => handleButtonClick(operator)}>
            {operator}
          </button>
        ))}
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
