



import React from 'react'
import FindSumOfGivenArray from './Code33';

const Code154 = () => {
     var a="simmmi"
     function outer(){
        var a="aniket";
        function b(){
            console.log(a)
        }
        b();
     }

     outer();
     console.log(a)
    
     function greet(greeting) {
        return function(name) {
            console.log(greeting + ", " + name);
        };
    }
    
    const sayHello = greet("Hello");
    sayHello("Aniket"); // Logs: "Hello, Aniket"
    sayHello("Prabh"); // Logs: "Hello, Prabh"
    

  return (
    <div>
      
    </div>
  )
}

export default Code154
