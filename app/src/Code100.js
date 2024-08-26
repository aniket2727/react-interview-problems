// Code is written by Aniket Kadam
// Nested objects

const NestedObject = () => {
    let count = 0;

    const data = {
        name: "Aniket",
        obj1: {
            data1: [1, 2, 3, 4, 5],
            name1: "Aniket Kadam"
        },
        obj2: {
            obj3: {
                name3: "Vijay Kadam",
                obj4: "Om Kadam"
            },
            data3: [1, 2, 3, 4, 5]
        }
    };

    const iterateObject = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                console.log(key, ":", obj[key]);
            } else if (Array.isArray(obj[key])) {
                for (let item of obj[key]) {
                    count += item;
                }
            } else if (typeof obj[key] === 'object') {
                iterateObject(obj[key]); // Recursive call to handle nested objects
            }
        }
    };

    iterateObject(data);

    console.log("Total count of array elements:", count);

    return (
        <div>
            <h1>Nested Objects</h1>
        </div>
    );
};

export default NestedObject;
