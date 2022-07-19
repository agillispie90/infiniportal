import React from 'react';
import logo from '../logos/logonotext.png'
const fullYear = new Date().getFullYear();



export default Footer => {return(
    <footer>
        <div className='foot'>
        <p className="copyright">© InfiniPortal {fullYear}</p>
        <img className='navLogo' src={logo} alt='InfiniPortal Logo'/>
        <a href='/contact' className='hover'>Contact Support</a>
        </div>
    </footer>
)}