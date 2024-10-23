import { useEffect, useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(10);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        console.log("Error occurred");
        return;
      }
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const selectedData = data.slice((count - 1) * page, count * page);
    setSelected(selectedData);
  }, [count, data, page]);

  const handleInc = () => {
    console.log("Handle increment");
    if (count < Math.ceil(data.length / page)) { // Ensure count does not exceed total pages
      setCount(prev => prev + 1);
    }
  };

  const handleDec = () => {
    console.log("Handle decrement");
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const handleSelected = (item) => {
    setCount(item);
    console.log("Counter set to", item);
  };

  return (
    <div>
      <h1>Pagination</h1>
      <button onClick={handleInc}>Next</button>
      <div>
        {Array.from({ length: Math.ceil(data.length / page) }, (_, index) => (
          <div key={index}>
            <button onClick={() => handleSelected(index + 1)}>{index + 1}</button>
          </div>
        ))}
      </div>
      <button onClick={handleDec}>Previous</button>

      {/* Display selected items for current page */}
      <div>
        <h2>Items on Current Page:</h2>
        {selected.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
