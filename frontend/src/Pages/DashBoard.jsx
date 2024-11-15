import React, { useState } from 'react'
import LineChart from '../Components/LineChart';
import DashBoardValue from '../Components/DashBoardValue';

const DashBoard = () => {

  const [balance, setBalance] = useState(300);
  const [income, setIncome] = useState(1500);
  const [expense, setExpense] = useState(1200);

  return (
    <div>
   

    <div className={`p-6 rounded-md shadow-md  bg-blue-200`}>
      <h2 className="text-lg font-semibold">Total Balance</h2>
      <p className="text-xl font-bold">Total {balance}</p>
    </div> <div className={`p-6 rounded-md shadow-md  bg-green-200`}>
      <h2 className="text-lg font-semibold">Total Income</h2>
      <p className="text-xl font-bold">Total {income}</p>
    </div> <div className={`p-6 rounded-md shadow-md bg-red-200`}>
      <h2 className="text-lg font-semibold">Total Expense</h2>
      <p className="text-xl font-bold">Total {expense}</p>
    </div>


      <LineChart category={"All"} />
    </div>
  )
}

export default DashBoard
