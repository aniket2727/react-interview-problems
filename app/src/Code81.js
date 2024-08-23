

// code is written by aniket kadam
// javascript attrubutets




const  Dom1=()=>{

    const handleChangeolor=()=>{
        const objects=document.getElementsByClassName('change');
        for(let i=0;i<objects.length;i++){
            objects[i].style.color="green"
        }
        //  objects.style.color="green"
    }

    return(
        <div className="change">
           <h1>Advanced javascript</h1>
           <h1>i am pro coder</h1>
           <button onClick={handleChangeolor}>chage color</button>
        </div>
    )
};

export default  Dom1;
