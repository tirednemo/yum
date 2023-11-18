import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import './Auth.css';

const Register = ({visibility}) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "phone": "",
        "password": ""
    })
    const [pass, setPass] = useState('');
    const [check, setChecked] = useState(false);
    const [emailMsg, setEmailMsg] = useState('');
    const [phoneMsg, setPhoneMsg] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');


    const closeOverlay = () => {
        setIsLoading(false)
        visibility.setSignupVisibility(false);
        setUser({
            "firstName": "",
            "lastName": "",
            "email": "",
            "phone": "",
            "password": ""
        });
        setEmailMsg('')
        setPhoneMsg('')
        setPasswordMsg('')
        setPass('')
        setChecked(false)
    };



    function SubmitButton() {
        if (user.firstName && user.lastName && user.email && user.phone && user.password && check) {
            if (isLoading) {
                return <button className="right ms-auto btn bt"><i
                    className='fa fa-spinner fa-spin'></i> Sign Up</button>
            } else {
                return <button type="submit" className="right ms-auto btn bt">Sign Up</button>
            }
        } else {
            return <button disabled className="right ms-auto btn bt">Sign Up</button>
        }
    }


    if (!visibility.signupVisibility) {
        return null;
    }
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
                    <form className="form" >
                        <h5 className="text-center mb-4">Join the YumCast community!</h5>

                        <div className="form-group mb-1 row">
                            <div className="col-md">
                                <label htmlFor="firstName">First Name</label>
                                <input className="form-control" type="text" id="firstName" name="firstName" required
                                       value={user.firstName} onChange={(e) => {
                                    setUser({
                                        ...user,
                                        firstName: e.target.value
                                    });
                                }}/>
                            </div>
                            <div className="col-md">
                                <label htmlFor="lastName">Last Name</label>
                                <input className="form-control" type="text" id="lastName" name="lastName" required
                                       value={user.lastName} onChange={(e) => {
                                    setUser({
                                        ...user,
                                        lastName: e.target.value
                                    });
                                }}/>
                            </div>
                        </div>

                        <div className="form-group mb-1">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" id="email" name="email" required
                                   value={user.email} onChange={(e) => {
                                setUser({
                                    ...user,
                                    email: e.target.value
                                });
                                setEmailMsg('')
                            }}/>
                            <small className={emailMsg === '' ? 'd-none' : ''}>{emailMsg}</small>
                        </div>

                        <div className="form-group mb-1">
                            <label htmlFor="phone">Phone</label>
                            <div className="input-group">
                                <div className="input-group-append">
                                    <span className="input-group-text append">+880</span>
                                </div>
                                <input className="form-control" type="tel" id="phone" name="phone" pattern="\d{10}"
                                       title="Phone number must be 11 digits." required
                                       value={user.phone} onChange={(e) => {
                                    setUser({
                                        ...user,
                                        phone: e.target.value
                                    });
                                    setPhoneMsg('')
                                }}/>
                            </div>
                            <small className={phoneMsg === '' ? 'd-none' : ''}>{phoneMsg}</small>
                        </div>


                        <div className="form-group mb-1">
                            <label htmlFor="pass">Password</label>
                            <input className="form-control" type="password" id="pass" name="pass"
                                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                   title="Must be more than 8 characters with at least one number, one uppercase and one lowercase letter"
                                   required
                                   value={pass} onChange={(e) => {
                                setPass(e.target.value);
                            }}/>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="password">Confirm Password</label>
                            <input className="form-control" type="password" id="password" name="password" required
                                   value={user.password} onChange={(e) => {
                                setUser({...user, password: e.target.value});
                                setPasswordMsg('')
                            }}/>
                            <small className={passwordMsg === '' ? 'd-none' : 'msg'}>{passwordMsg}</small>
                        </div>

                        <small className="mb-4 text-sm">
                            <input type="checkbox" id="check" required checked={check}
                                   onChange={() => setChecked(!check)}/> By registering, you are agree to our Terms
                            of
                            Service and Privacy Policy.
                        </small>

                        <div className="d-flex align-items-center">
                            <a href="./register" className='left'>Already have an account?</a>
                            <SubmitButton/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register