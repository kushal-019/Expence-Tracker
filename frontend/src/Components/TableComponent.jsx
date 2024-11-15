import React from 'react';

const TableComponent = () => {
  const data = [
    { id: 1, name: 'John Doe', date: '2024-11-15', time: '10:30 AM', amount: '$100' },
    { id: 2, name: 'Jane Smith', date: '2024-11-14', time: '2:45 PM', amount: '$200' },
    { id: 3, name: 'Mark Lee', date: '2024-11-13', time: '1:00 PM', amount: '$150' },
    { id: 4, name: 'Emma White', date: '2024-11-12', time: '4:30 PM', amount: '$120' },
    { id: 5, name: 'Sophia Brown', date: '2024-11-11', time: '9:00 AM', amount: '$180' },
  ];

  return (
    <div>
      <h1>Transaction Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
