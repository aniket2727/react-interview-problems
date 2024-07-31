

// code is written by aniket kadam
// shallow copy and deep copy


const Copyconcept = () => {


    // shallow copy
    const data = { name: "aniket", age: 24 };
    console.log("the original copy is ", data)
    const shallowcopy = data;
    console.log("the shallow copy is ", shallowcopy);

    shallowcopy.name = "sanket"
    console.log("the value of deep copy is ", data)

    //deep copy
    const deepcopy={...data};
    deepcopy.name="king kong";
    console.log("change in  value after deep copy",data)

    const deepcopywithjson=JSON.parse(JSON.stringify(data));

    deepcopywithjson.name="om";
    console.log("after with the json",data)

    return (
        <div>
            <h1>shallow copy and deep copy</h1>
        </div>
    )
}

export default Copyconcept;