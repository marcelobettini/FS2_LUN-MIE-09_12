import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main style={{ padding: "1rem" }}>
            <p>404 Not Found</p>
            <Link to="/">Back Home</Link>
        </main>
    )
}

export default NotFound