

import { useState } from "react";

const Code177 = () => {
    const [data, setData] = useState([{ roll:1, name: 'aniket' }, {roll:2, name: 'kadam' }]);
    console.log(data);
    const[selected,setselected]=useState([]);

    const handleClick=(item)=>{
        console.log("input",item);
          if(selected.includes(item)){
            const result=selected.filter((a)=>a!==item);
            setselected(result);
          }else{
                setselected([...selected,item])
          }

    }

    return (
        <div>
            <h1>Tabs Component</h1>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h1 onClick={()=>handleClick(item.roll)}>{item.roll}</h1>
                        {
                            selected.includes(item.roll) ?<div>{item.name}</div>:null
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Code177;
