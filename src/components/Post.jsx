const Post = ({id, title, description, onDeletePost}) => {

  return (
    <div className="border p-3 my-2 rounded shadow">
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>

      <button className="text-sm px-3 py-1 mt-2 rounded border hover:bg-gray-200" onClick={() => onDeletePost(id)}>Delete</button>
    </div>
  );
};

export default Post;