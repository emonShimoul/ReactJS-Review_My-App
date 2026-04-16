import Post from './Post';

const PostList = ({posts, onDeletePost}) => {
    return (
        <div className="space-y-3 mt-4">
            {posts.length === 0 && <p className="text-center mt-4">No posts available</p>}
            {posts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.body}
                handleDeletePost = {onDeletePost}
            />
            ))}
        </div>
    );
};

export default PostList;