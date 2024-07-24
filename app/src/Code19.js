//  code is written by aniket kadam
// simple example of high order functions

const Highorderfuntions=(Wrappedcomponets)=>{
    return(props)=>{
       return <Wrappedcomponets {...props}/>
    }
}
const Childcomponets=()=>{
    return(
        <h1>this is child componets</h1>
    )
};

export const Exporetedhoc=Highorderfuntions(Childcomponets)




