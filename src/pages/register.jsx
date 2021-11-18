import React from 'react'
import '../styles/register.css'
import { CancelOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className="register-container">
            <Link to="/home"><CancelOutlined /></Link>
            <div className="register-wrapper">
                <h4>Register</h4>
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
