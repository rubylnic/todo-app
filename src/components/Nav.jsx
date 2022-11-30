import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <Link className='todo__main-title' to="/"><h1>Todo app</h1></Link>
        </div>
    )
}
