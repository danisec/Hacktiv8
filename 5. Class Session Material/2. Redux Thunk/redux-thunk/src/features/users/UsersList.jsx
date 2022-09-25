import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './usersSlice'

function UsersList() {
  const dispatch = useDispatch()
  const allusers = useSelector((state) => state.users.user)

  const doFetchUsers = () => {
    dispatch(fetchUsers())
  }

  return (
    <>
      <div>
        <h2>Users Data</h2>
      </div>

      <button onClick={doFetchUsers}>Get Users</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {allusers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersList
