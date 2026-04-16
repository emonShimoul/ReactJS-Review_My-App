import { useState } from 'react';

const PostForm = ({onAddPost}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

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

        onAddPost(newPost);

        // clear input
        setTitle("");
        setDescription("");
    };

    return (
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
    );
};

export default PostForm;