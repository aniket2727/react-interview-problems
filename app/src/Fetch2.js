


import React from 'react'
import Fetchdata from './Fetch1'
const Fetch2 = () => {
    const { data, error, loading } = Fetchdata('https://jsonplaceholder.typicode.com/todos');
    
  return (
    <div>
      
    </div>
  )
}

export default Fetch2
