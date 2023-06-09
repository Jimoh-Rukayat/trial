import React from "react";
import '../Styles/LogIn.css'
import foot from '../assets/footericon-left..svg'
import foot2 from '../assets/footericon-right..svg'
import { Link } from "react-router-dom";
import logo from "../assets/exams 2.png"
import { BsEyeSlash } from "react-icons/bs";



const Login = ()=>{
    return(
        <div>
             <div className="login-top">
                    <Link to='/'><div className="login-image"><img src={logo} alt={logo}/></div></Link>
                    <div><p>Don't have an account? Signup <Link to='/register'>here</Link></p></div>
            </div>
            <div className="login-parent">
            <div className="login">
                <div><h1>Login To Account</h1></div>
                <form className="login-form">
                    <label>Username/Phone No</label> 
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
                    <span className="login-eye"><BsEyeSlash/></span>
                    <a href="#">Forgot Password</a>
                    <div className="reg-button" id="log-button"> <a>Login</a></div>
                </form>
            </div>
            </div>
            <div>
                <img className="image-1" src={foot} alt={foot} />
                <img className="image-2" src={foot2} alt={foot2} />
            </div>
        </div>
    )
}


export default Login;