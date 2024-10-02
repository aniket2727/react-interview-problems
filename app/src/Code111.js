// code is written by Aniket Kadam

const PromisesUnderstanding = () => {
  
    async function handlePromises() {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch('//dummyjson.com/test');
          if (response.ok) {
            const result = await response.json();
            resolve(result);
          } else {
            reject('Error in fetching data');
          }
        } catch (error) {
          reject('Network error or invalid URL');
        }
      });
    }
  
    function handleSecond() {
      return new Promise((resolve, reject) => {
        try {
          fetch('https://jsonplaceholder.typicode.com/todos/0')
            .then((response) => {
              if (response.ok) {
                return response.json(); // Parse the response as JSON
              } else {
                reject('Error in fetching data');
              }
            })
            .then((data) => {
              resolve(data); // Resolve with the parsed data
            })
            .catch((error) => {
              reject('Internal server error');
            });
        } catch (error) {
          reject('Internal server error');
        }
      });
    }
  
 
     Promise.any([handlePromises(),handleSecond()])
     .then(([result1,result2])=>{
        console.log("The result from handlePromises is", result1);
        console.log("The data from handleSecond is", result2);
     })
     .catch((error)=>{
        console.log("the error is ",error);
     })
    return (
      <h1>Promises Understanding</h1>
    );
  };
  
  export default PromisesUnderstanding;
  