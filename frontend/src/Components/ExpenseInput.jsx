import React, { useState } from 'react';

const ExpenseInput = ({transactionType}) => {

  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const currUser = localStorage.getItem('LoggedInuser');
    currTransaction = {
        name , dateTime  , amount , transactionType , currUser
    }
    localStorage.setItem('transaction', JSON.stringify(transaction));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on change
      />
      <input
        type="text"
        placeholder="Date and Time"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseInput;
