const Page = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    let posts:{name:string}[] = await data.json()
    console.log(posts)
    return(
        <div>
            {posts.map(post => {
                return(
                    <div>
                        {post.name}
                    </div>
                )
            })}
        </div>
    )
}
export default Page
