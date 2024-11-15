import React, { useState } from 'react'

const ListTransactions = ({ category }) => {
  const parentArr  = [
    { name: 'John Doe', dateTime: '2024-11-15 10:30 AM', amount: 100 , category : 'income' },
    { name: 'Jane Smith', dateTime: '2024-11-15 02:15 PM', amount: 200 , category : 'income'  },
    { name: 'Alice Johnson', dateTime: '2024-11-16 11:45 AM', amount: 150 , category : 'expense'  },
  ];
  ;
  const [data, setData] = useState([]);

  if (category === 'income') {
    const filteredData = data.filter(item => item.category === 'income');
    setData(filteredData);
  }
  else if (category === 'expense') {
    const filteredData = data.filter(item => item.category === 'expense');
    setData(filteredData);

  }
  else {
    setData(parentArr);
  }

  return (
    <div>
      <p>{category}</p>
      <div>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Date & Time</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.dateTime}</td>
                <td className="border px-4 py-2">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListTransactions
