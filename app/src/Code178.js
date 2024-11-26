import { useEffect, useState } from "react";

// Custom hook for fetching data with a 4-second loading display
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleFetch = async () => {
            setLoading(true);
            try {
                // Fetch data
                const fetchData = fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Something went wrong');
                        }
                        return response.json();
                    })
                    .then((result) => setData(result));

                // // Ensure 4 seconds loading delay
                // const delay = new Promise((resolve) => setTimeout(resolve, 4000));

                const delay=new Promise((resolve)=>setTimeout(resolve,3000))

                // Wait for both fetch and delay to complete
                //await Promise.all([fetchData, delay]);

                await Promise.all([fetchData,delay]);
            } catch (err) {
                setError(err.message);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        handleFetch();
    }, [url]);

    return { data, loading, error };
};

// Component to display fetched data
const Code178 = () => {
    const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

    if (loading) {
        return <div>Loading for 4 seconds...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data && data.map((product) => (
                    <li key={product.id}>
                        {product.title} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Code178;
