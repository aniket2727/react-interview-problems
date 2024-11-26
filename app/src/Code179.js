

// form cvalidations


import React from 'react';
import { useState } from 'react';


const Code179=()=>{
    const[data,setdata]=useState({name:'',email:''});
    const[error,seterror]=useState({});
    const handleChange=(e)=>{
         const{name,value}=e.target;
         setdata((prev)=>({...prev,[name]:value}))

    };

    const handleSubmit=(e)=>{

        const handle={}
        if(!data.name){
          handle.name="name is required";
        }
        if(!data.email){
            handle.email="email is required"
        }

    
          e.preventDefault();
          //seterror(handle);
          seterror(handle)
          console.log(data)
          console.log(error);
        //  console.log(handle)
    }
    return(
        <div>
            <h1>form code</h1>
            <div>
                <form onSubmit={handleSubmit}>
                
                     <h1>enter name</h1>
                     <input value={data.name} name='name' onChange={handleChange}/>
                     {error.name && <span>name is required</span>}
                     <h1>enter email</h1>
                     <input value={data.email} name='email' onChange={handleChange}/>
                     {error.email && <span>email is required</span>}
                     <button type='submit'>submit</button>
                </form>
            </div>
        </div>
    )
};



export default Code179;