import Link from "next/link"
import {  getUsers } from "../api/posts.api"
import { UserType } from "../types/user.type"

const UsersList = async () => {
    let users = await getUsers()
    return(
        <div className="w-fit">
            {users.map((user:UserType) => {
                return(
                    <Link href={`users/${user.id}`} className="flex w-fit">
                        <div className="w-fit rounded-md px-1 cursor-pointer hover:bg-black hover:text-white">
                            {user.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default UsersList