

// code is written by amiket kadam
// delete from array 

import { useState } from "react";



const Deletefromaray=()=>{

    const [item,setitem]=useState('');
    const [deletedata,setdeletedata]=useState(['aniket','simmi','sanket','abhisekh'])
    const [messaeege,setmessage]=useState('');

    const handledelete=()=>{
          
        let result=deletedata.filter(a=>a!==item);
        let messaeege1=deletedata.find((a)=>a===item);
        
        console.log(result);
        console.log(messaeege1)
        if(messaeege1){
            setdeletedata(result);
            setmessage('');
        }
        else{
            setmessage('item is not presetnt')
        }
    }
    return(
        <div>
           <h1>delete from state</h1>
           <input onChange={(e)=>setitem(e.target.value)}/>
           <button onClick={handledelete}>delete</button>
           {
               messaeege?<span  style={{backgroundColor:'red'}}>{messaeege}</span>:null
           }
           {
               deletedata.map((item,index)=>{
                return(
                    <div  key={index}>
                       <h1>{item}</h1>
                    </div>
                )
               })
           }
        </div>
    )
};



export default Deletefromaray;