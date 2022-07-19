import React from "react";
import logo from './logos/logonotext.png'

export default Login => {
    return (
        <>
            <div className="loginContain">
                <form className="login">
                    <div className="loginDiv">
                        <h2>InfiniPORTAL Login</h2>
                    <a href="/"><img style={{ "maxWidth": "200px" }} src={logo} alt="InfiniPortal logo" /></a>
                    <input type="text" name="email" placeholder="Enter E-Mail" />
                    <input type="password" name="password" placeholder="Enter Password" />
                    <button>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}