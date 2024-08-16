

// code is written by amilet kadam
// higher order funtion ,used for reuse the logic


function withloading(Component){
    return function withloadingComponent({isLoading,...props}){
        if(isLoading){
            return <p>Loading...</p>
        }

        return <Component {...props}/>
    }
}

// A simple functional component that will display data
const DataDisplay = ({ data }) => {
    return (
      <div>
        <h1>Data:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };

  
const Datadisplaywithloading=withloading(DataDisplay);


const Mainhoc=()=>{
    return(
          <Datadisplaywithloading/>
    )
}


export default Mainhoc;



