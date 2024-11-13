
// hoc 

import React from 'react';


const Hoc=(Wrapped)=>{
    const a={color:'red'}
    return (props)=>{
         return <Wrapped  {...a} {...props}/>
    }
}


const Printname=(props)=>{
   return(
    <h1 style={{backgroundColor:props.color}}>print data</h1>
   )
}


export const Hocsend=Hoc(Printname);


// const Code155=()=>{
//     return(
//         <div>
            
//         </div>
//     )
// };



// export default Code155;

