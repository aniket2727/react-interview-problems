

// code is written by aniket kadam
// higher order funtions


import React from 'react'

const Code88 = () => {


    function higherorder(fn){
        return function(item){
            fn(item)

        }

    }

    function print(item){
        console.log(item);
    }


    const mainhigh=higherorder(print);
    mainhigh("hello my name is aniket")

  return (
    <div>
       <h1>higher order component</h1>  
    </div>
  )
}

export default Code88
