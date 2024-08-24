/* eslint-disable no-self-compare */


// code is written by aniket kadam
// javascript


const Newconcepts = () => {

    console.log(0 == '');      // true
    console.log(0 === '');     // false
    console.log(0 == '0');     // true
    console.log(0 === '0');    // false
    console.log(0 == false);   // true
    console.log(0 === false);  // false


    console.log([] == []);       // false
    console.log([] === []);      // false
    console.log([] == false);    // true
    console.log([] === false);   // false
    console.log([0] == false);   // true
    console.log([0] === false);  // false

    console.log(null == undefined);   // true
    console.log(null === undefined);  // false
    console.log(null == 0);           // false
    console.log(null === 0);          // false

//     console.log({} == {});           // false
// console.log({} === {});          // false
// console.log({} == '[object Object]'); // true
// console.log({} === '[object Object]'); // false


    return (
        <div>
            <h1>javascript new concepts</h1>
        </div>
    )
};



export default Newconcepts;
