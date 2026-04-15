import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPosts = async() => {
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0,5)); // limit for UI
      } catch(error){
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  },[]);

  if(loading){
    return <h2 className="text-center text-xl">Loading...</h2>
  }

  if (error) {
    return <h2 className="text-red-500 text-center">Something went wrong</h2>;
  }

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: "New Post",
      body: "Added dynamically"
    };

    setPosts(prevPosts => [...prevPosts, newPost]);
  }

  // deleting post
  const handleDeletePost = (postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  }

  return (
    <div className="max-w-2xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>
      <button className="text-sm px-3 py-1 mt-2 rounded border hover:bg-gray-200" onClick={handleAddPost}>Add Post</button>

      <div className="space-y-3 mt-4">
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.body}
            handleDeletePost = {handleDeletePost}
          />
        ))}
      </div>
    </div>
  );
}

export default App;