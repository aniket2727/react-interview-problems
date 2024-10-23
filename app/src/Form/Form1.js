


import React from 'react'
import { useState } from 'react';
import Form2 from './Form2';
const Form1 = () => {
    const[data,setdata]=useState({name:'',email:''});
   const [validate,setvalidate]=useState('');

    const handleformdata=(e)=>{
          const{name,value}=e.target;
          setdata(prev=>({...prev,[name]:value}))
    }


    const handlesubmit=(e)=>{
         e.preventDefault();
         const validation=Form2(data);
         console.log(validation)
         setvalidate(validation)
         console.log(data);
    }
  return (
    <div>
         <form onSubmit={handlesubmit}>
         <input name='name' value={data.name} onChange={handleformdata}/>
         {validate.name && <span style={{color:'red'}}>{validate.name}</span>}
         <input name='email' value={data.email} onChange={handleformdata}/>
         {validate.email && <span style={{color:'red'}}>{validate.email}</span>}
         <button type='submit'>submit</button>
         </form>
    </div>
  )
}

export default Form1
