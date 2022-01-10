import React from 'react'
import {useNavigate} from 'react-router-dom'

function Contactus() {

    const navigate=useNavigate()

    return (
        <div className='text-center'>
            <h1>Contactus</h1>
            {/* link to navigate to users component */}
            <button className="btn btn-warning" onClick={()=>navigate('/users')}>
                Go to users
            </button>
        </div>
    )
}

export default Contactus
