import React from 'react'

const Code232 = () => {

    //closure code 

    function outer(name) {
        const data = "aniket kadam";
        return function inner() {
            console.log("the inner functio is ", data);
            console.log("name is ", name);
        }
    }

    const obj = outer("sanket");
    obj();


    //cuuuring 


    function currring(a) {
        return function (b) {
            return function (c) {
                console.log(a + b + c);
            }
        }
    }

    currring(10)(20)(30);

    //call applay bind

    const data={
        name:"aniket",
        age:"20"
    }

    function printdata(grreting,end){
        console.log(` ${this.name} ${grreting}`)
    }

    printdata.call(data,"hellow world","bye");
    printdata.apply(data,["hello world","end"]);
    const gg=printdata.bind(data,"hello","bye");
    gg();

    return (
        <div>
            <h1>code is running</h1>
        </div>
    )
}

export default Code232
