import Posts from "../../features/posts/PostsList";
import { BlogNav } from "./BlogNav";

export default function Blog(){
    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <BlogNav/>
            <Posts/>
        </div>
    )
}
