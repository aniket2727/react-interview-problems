
//   higher order component

import React from 'react'



const HigherOrder=(Wrappper)=>{
        return(props)=>{
            const name="aniket"
            return <Wrappper data={name} {...props} />
        }
}

const Printdata=(props)=>{
    return(
        <h1>{props.data}</h1>
    )
}


const Exporthigherorder=HigherOrder(Printdata);

const Code234 = () => {     
  return (
    <div>
          <Exporthigherorder/>    
    </div>
  )
}

export default Code234
