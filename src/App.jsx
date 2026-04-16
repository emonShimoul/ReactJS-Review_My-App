import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim() || !description.trim()){
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      body: description
    }

    setPosts(prevPosts => [newPost, ...prevPosts]);

    // clear input
    setTitle("");
    setDescription("");
  };

  // deleting post
  const handleDeletePost = (postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  }

  return (
    <div className="max-w-2xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>

    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Post Title"
        className="border p-2 w-full rounded focus:outline-none focus:ring-2"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
      />

      <textarea
        placeholder="Post Description"
        className="border p-2 w-full rounded focus:outline-none focus:ring-2"
        value={description}
        onChange={(e)=>{setDescription(e.target.value)}}
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Post
      </button>
    </form>

    {posts.length === 0 && <p>No posts available</p>}

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