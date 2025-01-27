
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Code279 = () => {

    const d = new Array(3).fill(null).map(() => new Array(3).fill(''));
    const [data, setdata] = useState(d);
    const[user,setuser]=useState('first')
    const[game,setgame]=useState(false);

    const handleClick=(row,column)=>{
           if(data[row][column]===''){
               const newData=data.map((item,i)=>(
                   i===row ? item.map((a,b)=>{
                    return b===column ? (user==='first'?'X':'O'):a
                   }):item
               ))
               setdata(newData);
           }
             setuser((prev)=>prev==='first'?'second':'first')
    }

    useEffect(()=>{
        console.log(data);
        console.log(user)

        for(let i=0;i<3;i++){
            if (data[i][0] !== '' && data[i][0] === data[i][1] && data[i][1] === data[i][2]) {
                setgame(true);
                return;
              }
        }

        for(let i=0;i<3;i++){
            if (data[0][i] !== '' && data[0][i] === data[1][i] && data[1][i] === data[2][i]) {
                setgame(true);
                return;
              }
        }

        if (
            (data[0][0] !== '' && data[0][0] === data[1][1] && data[1][1] === data[2][2]) ||
            (data[0][2] !== '' && data[0][2] === data[1][1] && data[1][1] === data[2][0])
          ) {
            setgame(true);
          }

    },[user,data])

    // {
    //     a!==''?<div style={{backgroundColor:a==='X'?'red':'green'}}>a<div>:''
    // }


   
    
    return (
        <div>

            <div>
                {
                    game?<h1>game over</h1>:''
                }
            </div>
            {
                data.map((item, row) => {
                  return  <div key={row}   style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
                        {
                            item.map((a, column) => {
                                return (
                                    <div  onClick={()=>handleClick(row,column)} key={column}    style={{border:'1px solid black',height:'50px',width:"50px",backgroundColor:a==='X'?'green':(a==='O')?'red':''}} >
                                       
                                    </div>
                                )
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}

export default Code279







