

import React, { useEffect } from 'react'
import { useState } from 'react'
const Codee258 = () => {

    const[data,setdata]=useState({name:'aniket',age:10,rollno:'101'});
    const[selcteddata,setselecteddata]=useState([]);


    // let temp={};
    
    //  useEffect(()=>{
    //     for(let i in data){
    //         if(i==='age' ||i==='rollno'){
                  
    //               if(i==='age'){
    //                 temp.age=data[i];
    //               }
    
    //               if(i==='rollno'){
    //                 temp.rollno=data[i]
    //               }
    //         }
    //     }
    //     setselecteddata(temp)
    //  },[]);

    //  console.log(selcteddata)


    // //  const s=data.filter((item)=>{
    // //      return  item==='age' || item==='rollnumber'});
    // //  console.log("this is ",s);


    // useEffect(() => {
    //     const { age, rollno } = data; // Destructure the required fields
    //     setselecteddata({ age, rollno }); // Update the state with only the required fields
    //   }, [data]);


    //console.log("selcted data ",selcteddata);
 
  return (
    <div>
      <h1>Code 258</h1>
    </div>
  )
}

export default Codee258
