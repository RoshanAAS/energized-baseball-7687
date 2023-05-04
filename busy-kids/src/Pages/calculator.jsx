import React, { useState } from 'react';
import "./calculator.css";

export const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [emi, setEmi] = useState('');
  const [interest, setInterest] = useState('');

  const calculateLoan = () => {
    const r = rate / (12 * 100);
    const n = time * 12;
    const emi = (amount * r * ((1 + r) ** n)) / (((1 + r) ** n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - amount;
    setEmi(emi.toFixed(2));
    setInterest(totalInterest.toFixed(2));
  };

  return (
    <div>
      <h1>Loan Calculator</h1>
      <label>Loan amount:</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
      <label>Interest rate (%):</label>
      <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} /><br />
      <label>Loan duration (years):</label>
      <input type="number" value={time} onChange={(e) => setTime(e.target.value)} /><br />
      <button style={{padding:"8px", backgroundColor:"#62626636"}} onClick={calculateLoan}>Calculate</button><br />
      {emi && <div>EMI: {emi}</div>}
      {interest && <div>Total interest payable: {interest}</div>}
    </div>
  );
}

