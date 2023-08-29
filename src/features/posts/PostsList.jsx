import { useSelector } from "react-redux";
import { Post } from "../../components/blog/Post";

export default function Posts(){
    const posts = useSelector(state => state.posts)
    return (
        <div className="w-full h-full flex flex-col gap-5 justify-start items-start p-8">
            <h2 className="text-lg font-bold">Posts</h2>
            <div className="w-full h-full overflow-x-hidden overflow-y-auto grid grid-cols-2 gap-5">
                {
                    posts.map(post => (
                        <Post
                            title={post.title}
                            content={post.content}
                        />      
                    ))
                }
            </div>
        </div>
    )
}
