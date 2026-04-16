import { useEffect, useState } from "react";
import { fetchPosts } from "../services/postService";


const useFetchPosts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getPosts = async () => {
            try{
                const result = await fetchPosts();
                setData(result);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    return {data, loading, error};
};

export default useFetchPosts;