import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>
            <Link to='/'>Home</Link> | {''}

            <Link to='/about'>About Us</Link> | {''}

            <Link to='/members'>Members</Link> | {''}

            <Link to='/items'>Items</Link> | {''}
            {
                localStorage.getItem('token') &&
                <button onClick={() => handleLogout()}>Logout</button>
            }
        </>
    )
}

export default Navbar