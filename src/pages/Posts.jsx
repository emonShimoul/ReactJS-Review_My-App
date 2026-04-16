import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import useFetchPosts from "../hooks/useFetchPosts";

const Posts = () => {
    const {data, loading, error} = useFetchPosts("https://jsonplaceholder.typicode.com/posts");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data.slice(0,5));
    }, [data]);

    const handleAddPost = (newPost) => {
        setPosts(prev => [newPost, ...prev]);
    };

    // deleting post
    const handleDeletePost = (postId) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    }

    if (loading) return <h2 className="text-center text-lg font-semibold animate-pulse">Loading posts...</h2>;
    if (error) return <h2 className="text-center text-red-500">Failed to load posts. Please try again</h2>;

    return (
        <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">My Blog</h1>

        <div className="bg-white shadow-md p-4 rounded">
            <PostForm onAddPost={handleAddPost} />
            <PostList posts={posts} onDelete={handleDeletePost} />
        </div>
        </div>
    );
};

export default Posts;