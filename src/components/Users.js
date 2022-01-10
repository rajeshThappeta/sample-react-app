import { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {

    let [users, setUsers] = useState([])

    //make api call to get users
    useEffect(() => {

        let fetchData = async () => {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users")
            let usersData = res.data
            setUsers(usersData)
        }
        fetchData()

    }, [])

    return (
        <div className='text-center container'>
            <p className='display-2 text-primary'>Users</p>
            {/* display users data as table */}
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((userObj) => <tr key={userObj.id}>
                            <td>{userObj.id}</td>
                            <td>{userObj.name}</td>
                            <td>{userObj.username}</td>
                            <td>{userObj.website}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users
