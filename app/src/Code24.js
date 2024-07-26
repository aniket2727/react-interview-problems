

// code is written by aniket kadam
// dsa  problems  reverse string

const Reversestring=()=>{

    const handlestring=()=>{
        const name="aniketkadam";
        const a=name.split('')
        console.log(a);
        let i=0;
        let j=a.length-1
        while(i<j){
            let temp=a[i];
            a[i]=a[j];
            a[j]=temp
            i++;
            j--;
        }
        console.log(a.join(''))

    }
    handlestring();
    return(
        <div>
           <h1>reverse the string</h1>
        </div>
    )
};


export default Reversestring;