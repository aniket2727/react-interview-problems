


//code is written by aniket kadam



const withColor=(WrappedComponent)=>{
   return(props)=>{
           return <WrappedComponent  color="blue" {...props}/>
   }
};


const button=(props)=>{
    return(
        <button style={{color:props.color}}>add</button>
    )
}



export const Colorbutton=withColor(button);