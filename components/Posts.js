import Post from "./Post";

function Posts() {
    return (
        <div className="flex flex-col mt-3">
            <Post />
            <Post />
            <Post />
            <div className="mt-20"></div>
        </div>
    )
}

export default Posts
