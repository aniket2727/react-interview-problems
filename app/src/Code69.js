
// code is written by aniket kadam
// convert first letter to string



const Convertletter=()=>{


    let a="my name is aniket kadam"
    let b=a.split(' ');
   // Convert the first letter of each word to uppercase
   for (let i = 0; i < b.length; i++) {
    b[i] = b[i][0].toUpperCase() + b[i].slice(1);
}

    const result=b.join(' ');
    console.log(result);
    return(
        <div>
           <h1>Convert the first letters</h1>
        </div>
    )
};


export default Convertletter;