import React, { useEffect, useState } from 'react';
import "../style/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../Redux/action';

const Login = () => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState('');
    const login = useSelector(state=>state.login);
    const dispatch  = useDispatch();
    const navigate  = useNavigate();

    useEffect(()=>{
        if(login.isAuth){
            navigate('/');
        }
    },[login,navigate]) 

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(LoginUser(email,password));
    }

    return (
        <div className="login-body">
            <div className="container">
                <div className="card-container">
                    <div className="front"></div>
                </div>
               
                <form onSubmit={handleSubmit} >
                    <div className="inputBox">
                        <span>Username</span>
                        <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span>Password</span>
                        <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
                    </div>
                    <div>
                        <p className="register">
                            Don't have an account? &nbsp;
                            <Link to="/register"><b>Register</b></Link>
                        </p>
                    </div>
                    <input type="submit" value="Login" className="submit-btn" id="submit" />
                </form>
            </div>
        </div>
    );
}

export default Login;
