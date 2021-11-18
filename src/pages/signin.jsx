import React from 'react'
import '../styles/signin.css'

const SignIn = () => {
    return (
        <div className="signin-container">
            <div className="signin-wrapper">
                <h4>SIGN IN</h4>
                <form action>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>LOGIN</button>
                    <a>DON'T REMEMBER PASSWORD?</a>
                    <a>CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
}

export default SignIn
