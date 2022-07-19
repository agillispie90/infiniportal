import React from 'react';
import logo from '../logos/colorlogotp.png';
import navBtn from '../images/navbtn.png'





 export default Navbar => {
    function moveNav(){
        const navDesk= document.querySelector('.navDesk');
        const navMob = document.querySelector('.navMob')

        if(!navMob){
            navDesk.style.right="0%";
            navDesk.classList.add("navMob");
            navDesk.classList.remove('navDesk');
        }else{
            navMob.style.right="-25%";
            navMob.classList.add("navDesk");
            navMob.classList.remove('navMob');
        }
        
    }
    return(
        <nav>
        <div className="navContain navDesk" >
            <img className="navLogo" src={logo}
                alt="InfiniPortal - Your employee portal solution."/>
            <div className="navLinks-container">
                <ul className="navLinks">
                <a href='/'> <li>Home</li></a>
                <a href='about'><li>About</li></a>
                <a href='pricing'><li>Pricing</li></a>
                <a href='faq'><li>FAQ</li></a>
                <a href='login'><li>Login</li></a>
                    <a href='./signup'><button className="signUpBtn">Sign Up</button></a>
                </ul>
            </div>
        </div>
        
        <img src={navBtn} alt="Navigation Menu" onClick={moveNav} />

    </nav>

 )}