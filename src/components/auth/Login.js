import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import './Auth.css';
import {useAuth} from './AuthContext';

const Login = ({visibility}) => {
    const {login} = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [flag, setFlag] = useState('email');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');


    const closeOverlay = () => {
        visibility.setLoginVisibility(false);
        setFlag('email')
        setEmail('')
        setPassword('')
        setMsg('')
    };



    if (!visibility.loginVisibility) {
        return null;
    } else if (flag === 'email') {
        return (
            <div className="container-fluid overlay">
                <div className="row form-container">
                    <div className="col-md-6 foodPic">
                        <img
                            src={"https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                            alt={"food"}/>
                    </div>
                    <div className="col-md-6">
                        <button className="pseudo-button right mt-3" onClick={closeOverlay}><i
                            className="fa-regular fa-circle-xmark fa-2xl"></i></button>
                        <form className="form">
                            <h3 className="text-center mb-5">Welcome back!</h3>

                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="text" id="email" name="email" required
                                       value={email} onChange={(e) => {
                                    setEmail(e.target.value);
                                }}/>
                            </div>

                            <div className="form-group mb-5">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" type="password" id="password" name="password" required
                                       value={password} onChange={(e) => {
                                    setPassword(e.target.value);
                                    setMsg('');
                                }}/>

                                <small className={msg === '' ? 'd-none' : 'msg'}>{msg}</small>

                                <button className="pseudo-button right" onClick={() => {
                                    setFlag('forget');
                                }}>Forget password?
                                </button>
                            </div>

                            <div className="mb-5 d-flex justify-content-center">
                                <button className="btn" onClick={() => {
                                    setFlag('phone');
                                }}>Login with OTP
                                </button>
                            </div>

                            <div className="mt-5 d-flex align-items-center">
                                <a href="./register" className='left'>Create new account</a>
                                <button type="submit" className="right ms-auto btn bt">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>)
    } else {
        return (
            <div className="container-fluid overlay">
                <div className="row form-container">
                    <div className="col-md-6 foodPic">
                        <img
                            src={"https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                            alt={"food"}/>
                    </div>
                    <div className="col-md-6">
                        <button className="pseudo-button right mt-3" onClick={closeOverlay}><i
                            className="fa-regular fa-circle-xmark fa-2xl"></i></button>
                        <form className="form">
                            <h3 className="text-center mb-5">Welcome back!</h3>

                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="text" id="email" name="email" required
                                       value={email} onChange={(e) => {
                                    setEmail(e.target.value);
                                }}/>
                            </div>

                            <small className={msg === '' ? 'd-none' : 'msg'}>{msg}</small>

                            <div className="mt-5 d-flex align-items-center">
                                <a href="./register" className='left'>Create new account</a>
                                {isLoading ? <button className="right ms-auto btn bt"><i
                                        className='fa fa-spinner fa-spin'></i> Submit</button> :
                                    <button type="submit" className="right ms-auto btn bt">Submit</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login