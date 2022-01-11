import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer className='d-flex justify-content-around bg-dark text-white py-5'>
            {/* address1 */}
            <div className="address-1">
                <h4>KPHB</h4>
                <h4>Hyderabad</h4>
                <h4>5000085</h4>
            </div>
            {/* contcat info */}
            <div className="contact-info">
                <h4>test@mail.com</h4>
                <h4>9999999</h4>

            </div>
            {/* address2 */}
            <div className="address-2">
                <h4>Ameerpet</h4>
                <h4>Hyderabad</h4>
                <h4>5000067</h4>
            </div>

        </footer>
    )
}

export default Footer
