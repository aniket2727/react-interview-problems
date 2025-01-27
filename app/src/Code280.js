/* eslint-disable no-unreachable */

//   folder struture    


import React, { useEffect } from 'react'
import { useState } from 'react';

const Printdata = ({ folder,handlecheck,handleDeletefolder }) => {
    const [items, setitems] = useState('');
    useEffect(()=>{
            setitems(folder)
    },[folder])
    console.log("items",items)
    return (
        <div   style={{position:'relative',marginLeft:'10px'}}>
             
                <button  style={{height:'20px',width:'100px'}} onClick={()=>handlecheck(items.name)}>{items.name}</button>
                {
                        items.status===true?<button onClick={()=>handleDeletefolder(items.name)} style={{margin:'10px'}}>delete</button>:''
                }
                {
                    items.status &&
                     items.child?.length>0 &&
                     items.child.map((a,index)=>{
                        return typeof a==='object' ? <Printdata folder={a} handlecheck={handlecheck}/>:<p style={{position:'relative',marginLeft:'10px',margin:'0px'}}>{a}</p>
                     })

                   
                }

                <div>
                   
                </div>
             
        </div>
    )
}


const Code280f1 = () => {
    const [data, setdata] = useState([
    { name: 'a', status: false, child: [{name:'sub a',status:false,child:[]},"sanket"] },
    { name: 'b', status: false, child: [] },
    { name: 'c', status: false, child: [] },
    { name: 'd', status: false, child: [] },
    'aniket.txt'
    ])

    const handlestatusChange=(name)=>{
     
            const newData=data.map((item)=>{
               if(typeof item==='object'){
                return item.name===name?{...item,status:!item.status}:item

                if(item.child && item.child.length>0){
                    return {...item, child:handlestatusChange(item.child)}
                }
               }
            })

            setdata(newData)
    }


    const handleDeletefolder=(name)=>{
           const newdata=data.map((item)=>{
               if(typeof item==='object'){
                return item.name===name?'':item
               }
               else{
                  return  item===name?'':item
               }

               if(item.child && item.child.length>0){
                return {...item,child:handleDeletefolder(item.child)}
               }
           })

           setdata(newdata);
    }

    return (
        <div>
            <h1>folder struture </h1>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            {
                                typeof item === 'object' ? <Printdata folder={item} handlecheck={handlestatusChange}   handleDeletefolder={handleDeletefolder} /> : <h1>{item}</h1>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}



export default Code280f1;
