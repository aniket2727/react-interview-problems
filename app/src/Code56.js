// Code is written by Aniket Kadam
// Remove the duplicates from the array using a loop and object

const Duplicateremove = () => {
    const a = ['a', 'b', 'c', 'a', 'd', 'a', 'b'];
    const obj = {};

    for (let i = 0; i < a.length; i++) {
        if (obj[a[i]]) {
            a.splice(i, 1);
            i--;  // Adjust index after removal
        } else {
            obj[a[i]] = true;
        }
    }

    console.log("Elements after removing duplicates:", a);
    return (
        <div>
            <h1>Remove Duplicates</h1>
        </div>
    );
};

export default Duplicateremove;
