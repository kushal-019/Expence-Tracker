import React, { useState } from 'react'
import LineChart from '../Components/LineChart';
import DashBoardValue from '../Components/DashBoardValue';
import TableComponent from '../Components/TableComponent';
import UserDetail from '../Components/UserDetail';

const DashBoard = () => {

  const [balance, setBalance] = useState(300);
  const [income, setIncome] = useState(1500);
  const [expense, setExpense] = useState(1200);

  return (
    <div>

      <div>
        <p>Expense Tracker Application</p>
        <UserDetail />

      </div>
      <div className={`p-6 rounded-md shadow-md bg-lightBlue-100`}>
        <h2 className="text-lg font-semibold">Total Balance</h2>
        <p className="text-xl font-bold">Total {balance}</p>
      </div>

      <div className={`p-6 rounded-md shadow-md bg-lightGreen-100`}>
        <h2 className="text-lg font-semibold">Total Income</h2>
        <p className="text-xl font-bold">Total {income}</p>
      </div>

      <div className={`p-6 rounded-md shadow-md bg-lightRed-100`}>
        <h2 className="text-lg font-semibold">Total Expense</h2>
        <p className="text-xl font-bold">Total {expense}</p>
      </div>


      <LineChart category={"All"} />
      <TableComponent />
    </div>
  )
}

export default DashBoard
