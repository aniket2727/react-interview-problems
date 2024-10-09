


// code is written by aniket kadam
// const  reverse string

const Code122=()=>{


    const handlereversestring=()=>{
        let name="aniketkadam"
        const replacedstring=name.split('');
        console.log(replacedstring);

         let i=0;
         let j=replacedstring.length-1;

         while(i<j){
            let temp;
            temp=replacedstring[i];
            replacedstring[i]=replacedstring[j]
            replacedstring[j]=temp;
            i++;
            j--;
         }


         console.log("replace string",replacedstring.join(''))

    }

    handlereversestring();
    return(
        <div>
            <h1>code is writtten by aniket kadam</h1>
        </div>
    )
};




export default Code122;