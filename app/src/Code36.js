

// code is written by aniket kadam
// sort of an objet


const SortObject=()=>{

    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 20 }
    ];

    const sortbyage=people.sort((a,b)=>a.age-b.age);
    console.log("sort by age",sortbyage);

    const sortbyname=people.sort((a,b)=>a.name.localeCompare(b.name))
    console.log("sort by name",sortbyname);

    return(
        <div>
        </div>
    )
}


export default SortObject;