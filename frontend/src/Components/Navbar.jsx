import React from 'react'
import logo from "../Images/logo.jpg"
import { MdGridView } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" style={{ height: '40px' }} />
      </div>

      <div>
        <MdGridView />
        DashBoard
      </div>
      <div>
        <FaMoneyBillTransfer />
        Transaction
      </div>
      <div>
        <FaSackDollar />
        Loan
      </div>
      <div>
        <FaBook />
        Ledger
      </div>
    </div>
  )
}

export default Navbar
