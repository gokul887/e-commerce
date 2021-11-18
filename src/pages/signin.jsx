import React from 'react'
import '../styles/signin.css'
import { CancelOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className="signin-container">
            <Link to="/home"><CancelOutlined /></Link>
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
