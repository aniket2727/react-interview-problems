




import React, { useEffect } from 'react';
import{useState}  from 'react';

const PrintData=({folder,handleState})=>{
    const[data,setdata]=useState('');

    useEffect(()=>{
          setdata(folder)
    },[folder]);

     return(
       <div>
           <button onClick={()=>handleState(data.name)}>{data.name}</button>
       </div>
     )
}

const Folderw = () => {

      const [data, setdata] = useState([
        { name: 'a', status: false, child: [{name:'sub a',status:false,child:[]},"sanket"] },
        { name: 'b', status: false, child: [] },
        { name: 'c', status: false, child: [] },
        { name: 'd', status: false, child: [] },
        'aniket.txt'
        ])



        const handleState=(value)=>{
            console.log("this is value",value)
        }















  return (
    <div>
        <h1>folder struture </h1>

        {
            data.map((item,index)=>{
                return <div key={index}>
                    {
                        typeof item==='object'?<PrintData folder={item} handleState={handleState}/>:<p>{item}</p>
                    }
                    </div>
            })
        }
      
    </div>
  )
}

export default Folderw




