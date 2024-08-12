

// code is written by aniket kadam
// prime numbers or not

const Primenumberornot=()=>{

    function Primenumberornot(){
        let n= 10;
        let flag=true;
        let count=2;
        while(count<n){
           if(n%count===0){
            flag=false;
            break
           }
           else{
            count++;
           }
        }

        if(flag){
            console.log("this is prime numbers")
        }
        else{
            console.log("this is not a prime number")
        }
        
    }


    Primenumberornot();
    
    return(
        <div>
          <h1>prime number or not</h1>
        </div>
    )
}
export default Primenumberornot;