// code is written by Aniket Kadam
// custom hooks for fetching data

import { useEffect, useState } from "react";

const useFetchData = (url, options) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const handleFetch = async () => {
            setLoading(true); // Set loading to true at the start
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error("Error occurred in fetching data");
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message || "Unknown error occurred");
            } finally {
                setLoading(false); // Ensure loading is set to false in finally block
            }
        };

        handleFetch();
    }, [url, options]);

    return [data, error, loading];
};

export default useFetchData;
