import React, { useEffect, useState } from 'react';

const CustomHook = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');

  useEffect(() => {
    const handleData = async () => {
      try {
        setloading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setdata(result);
      } catch (error) {
        seterror(error.message);
      } finally {
        setloading(false);
      }
    };

    handleData();
  }, [url]);

  return { data, error, loading };
};

const Code237 = () => {
  const [count, setcount] = useState(0);
  const [selectedData, setselectedData] = useState([]);
  const [totalpages] = useState(4);

  const { data, error, loading } = CustomHook('https://fakestoreapi.com/products');

  const handleCount = (item) => {
    setcount((prev) => Math.min(Math.max(prev + item, 0), totalpages - 1));
  };

  const handledirectCount = (item) => {
    setcount(item);
  };

  useEffect(() => {
    if (data.length > 0) {
      let itemscount = Math.ceil(data.length / totalpages);
      const select = data.slice(count * itemscount, count * itemscount + itemscount);
      setselectedData(select);
    }
  }, [data, count, totalpages]);

  if (error) return <h1 style={{ color: 'red' }}>Error: {error}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Paginations</h1>
      {selectedData.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <h1>{item.category}</h1>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          disabled={count === 0}
          onClick={() => handleCount(-1)}
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: count === 0 ? '#ccc' : '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: count === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          Prev
        </button>
        <button
          disabled={count === totalpages - 1}
          onClick={() => handleCount(1)}
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: count === totalpages - 1 ? '#ccc' : '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: count === totalpages - 1 ? 'not-allowed' : 'pointer',
          }}
        >
          Next
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {Array.from({ length: totalpages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handledirectCount(index)}
            style={{
              padding: '5px 15px',
              margin: '0 5px',
              backgroundColor: index === count ? '#28A745' : '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Code237;
