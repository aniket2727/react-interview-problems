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
          fetch('https://jsonplaceholder.typicode.com/todos/1')
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
  
    // Call the promises and handle them
    handlePromises()
      .then((data) => {
        console.log("The result from handlePromises is", data);
      })
      .catch((error) => {
        console.error(error);
      });
  
    handleSecond()
      .then((data) => {
        console.log("The data from handleSecond is", data);
      })
      .catch((error) => {
        console.log("The error is", error);
      });
  
    return (
      <h1>Promises Understanding</h1>
    );
  };
  
  export default PromisesUnderstanding;
  