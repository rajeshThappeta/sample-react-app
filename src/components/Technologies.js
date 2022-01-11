import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function Technologies() {
    return (
        <div>

            {/* define links for its children */}
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link" to="html">HTML</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="javascript">JavaScript</NavLink>
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

