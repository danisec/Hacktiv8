import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || '/'

    const handleLogin = () => {
        localStorage.setItem('token', 'login')
        navigate(from, { replace: true })
    }

    return (
        <>
            <h1>Login page</h1>
            <p>Click the button to login</p>

            <button onClick={() => handleLogin()}>Login</button>
        </>
    )
}

export default Login