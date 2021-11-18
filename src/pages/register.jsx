import React from 'react'
import '../styles/register.css'
const Register = () => {
    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h4></h4>
                <form>
                    <input type="text" placeholder="full name" />
                    <input type="text" placeholder="username" />
                    <input type="email" placeholder="email" />
                    <input type="text" placeholder="phone" />
                    <input type="password" placeholder="password" />
                    <input type="password" placeholder="confirm password" />
                    <button>CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Register
