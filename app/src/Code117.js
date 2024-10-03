

// code is written by aniket kadam

import { useState } from "react"

const Code117=()=>{

    const[data,setdata]=useState({name:"",email:"",password:""});

    const handlesubmit=(e)=>{
        e.preventDefault();
         console.log("the data is ",data);
         data.email='';
         data.name='';
         data.password='';

    }

    const handleinput=(e)=>{
        const{name,value}=e.target;
        setdata((prev)=>({...prev,[name]:value}));
        
    }
    return(
        <div>
           <h1>Login form</h1>
           <form onSubmit={handlesubmit}>

           <input value={data.name}  name="name" onChange={handleinput}/>
           <input value={data.email}  name="email" onChange={handleinput}/>
           <input value={data.password}  name="password" onChange={handleinput}/>

           <button type="submit">Add</button>
           </form>
        </div>
    )
}


export default Code117;