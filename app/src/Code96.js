// Code is written by Aniket Kadam
// Handling promises in JavaScript

const HandlePromises = () => {

    const handle = () => {
        return new Promise((resolve, reject) => {
            const data = { name: "aniket", age: 20 };
            if (data) {
                resolve("data is present");
            } else {
                reject("data is rejected");
            }
        });
    };

    handle()
        .then((result) => {
            console.log("The result is:", result);
        })
        .catch((error) => {
            console.log("The error is:", error);
        });

    return (
        <div>
            <h1>Handle Promises</h1>
        </div>
    );
};

export default HandlePromises;
