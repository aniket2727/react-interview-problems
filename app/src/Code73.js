// code is written by Aniket Kadam
// custom hook

import { useEffect, useState } from "react";

const useCustomHook = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setPending(true);
            try {
                const fetchResult = await fetch(url);
                if (!fetchResult.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await fetchResult.json();
                setData(result);
                setError(null);  // Reset error in case of a successful fetch
            } catch (error) {
                setError(error.message);
                setData(null);  // Reset data in case of an error
            } finally {
                setPending(false);
            }
        };
        fetchData();
    }, [url]);  // Dependency array includes `url` to refetch data if `url` changes

    return { data, error, pending };
};

const UseCustomHook = () => {
    const url = 'https://fakestoreapi.com/products';
    const { data, error, pending } = useCustomHook(url);
    console.log(data);

    return (
        <div>
            <h1>Use of Custom Hooks</h1>
            {pending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default UseCustomHook;
