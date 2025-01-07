


import React from 'react';
import {useState} from 'react';
const Code247 = () => {

    const[data,setdata]=useState([
        {name:'A',child:[{name:'client',child:[],display:false}],display:true},
        {name:'B',child:[],display:true},
        {name:'c',child:[],display:true},
    ])

    
    const handlechild=(child)=>{
       if(child && child.length>0 ){
             child.map((item)=>{
                console.log(item.name);
                console.log(item.display);
                if(item.child && item.child.length>0){
                    handlechild(item.child);
                }
             })
       }
    }


    data.map((item)=>{
        console.log(item.name);
        console.log(item.display);
        if(item.child!==undefined){
            console.log("passing data",item.child)
            handlechild(item.child);
        }
    });



       
     
  return (
    <div>
          <h1>folder structure </h1>
    </div>
  )
}

export default Code247
