/* eslint-disable no-extend-native */
// custome map



const Code190=()=>{


    
    Array.prototype.map1=function(callback){
        const result=[];
        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this));  // Applying the callback function
          
            
        };   

        return result;
    }


    const data=[1,2,3,4,5];
    
    const result=data.map1((item,index)=>{
        return item * 2; 
    })

    console.log(result);
    return(
        <div>
            <h1>custome map</h1>
        </div>
    )
};



export default Code190;

