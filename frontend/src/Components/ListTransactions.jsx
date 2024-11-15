import React, { useState } from 'react'

const ListTransactions = ({category}) => {
    const parentArr = [];
    const [data , setData] = useState([]);

    if(category === 'income'){
        const filteredData = data.filter(item => item.category === 'income');
        setData(filteredData);
    }
    else if ( category === 'expense'){
        const filteredData = data.filter(item => item.category === 'expense');
        setData(filteredData);

    }
    else{
        setData(parentArr);
    }

  return (
    <div>
      
    </div>
  )
}

export default ListTransactions
