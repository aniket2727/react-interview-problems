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
  
    handlePromises()
      .then((data) => {
        console.log("The result is", data);
      })
      .catch((error) => {
        console.error(error);
      });
  
    return (
      <h1>Promises Understanding</h1>
    );
  };
  
  export default PromisesUnderstanding;
  