// reverse the string


const Code218=()=>{


    function reverse(){
        var data="kadam";
        const a=data.split('');
        console.log(a);

        let i=0;
        let j=data.length-1;
        while(i<j){
            let temp;
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
            i++;j--;
        }

        console.log(a.join(''))
    }

    reverse();
    return(
        <div>
            <h1>reverse the string</h1>
        </div>
    )
};



export default Code218;


