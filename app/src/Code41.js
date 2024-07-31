// Code is written by Aniket Kadam
// Object problems

const Objectproblems = () => {
    const data = {
        name: "aniket",
        age: "10",
        address: {
            emailis: "aniket@gamail.com"
        }
    };

    // Function to print data recursively
    function printData(data, parentKey = '') {
        for (let item in data) {
            // Construct the key path
            const keyPath = parentKey ? `${parentKey}__${item}` : item;

            if (typeof data[item] === 'object' && data[item] !== null) {
                // Recursively call printData for nested objects
                printData(data[item], keyPath);
            } else {
                console.log(keyPath + "__" + data[item]);
            }
        }
    }

    printData(data);

    return (
        <div>
            <h1>Object Problems</h1>
        </div>
    );
};

export default Objectproblems;
