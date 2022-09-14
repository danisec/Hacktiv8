import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <>
            <h1>About</h1>
            <p>This is my About Us page</p>

            <Link to='about-company'>About the Company</Link> | {''}
            <Link to='about-me'>About Me</Link>

            <Outlet />
        </>
    )
}

export default About