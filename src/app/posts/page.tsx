import { getUsers } from "@/features/posts/api/posts.api"

const Posts = async ({posts}) => {
    const users = await getUsers()
    console.log(users)
    return(
        <div>
            posts
        </div>
    )
}
export default Posts
