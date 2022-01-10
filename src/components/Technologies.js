import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Technologies() {
    return (
        <div>

            {/* define links for its children */}
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">HTML</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="javascript">JavaScript</Link>
                </li>

            </ul>

            {/* placeholder to load selected component */}
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Technologies

