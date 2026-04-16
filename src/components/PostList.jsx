import Post from './Post';

const PostList = ({posts, onDelete}) => {
    if (posts.length === 0) {
        return <p className="text-center mt-4">No posts available</p>;
    }
    return (
        <div className="space-y-3 mt-4">
            {posts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.body}
                onDelete = {onDelete}
            />
            ))}
        </div>
    );
};

export default PostList;