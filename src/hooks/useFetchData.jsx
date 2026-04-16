import { useEffect, useState } from "react";


const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try{
                setError(null);
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {data, loading, error};
};

export default useFetchData;