import './Navigation.css'
import {Link, useLocation} from "react-router-dom";
import {useAuth} from '../auth/AuthContext';
import {useState} from "react";

const Navigation = ({overlay}) => {
    const {biscuit, logout} = useAuth();
    const location = useLocation();
    const [user, setUser] = useState('');

    // useEffect(() => {
    //     if (biscuit) {
    //         AuthService.getCurrentUser(biscuit)
    //             .then(res => {
    //                 setUser(res.data);
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     }
    // }, [biscuit]);

    const login = () => {
        overlay.setLoginVisibility(true);
    };
    const signup = () => {
        overlay.setSignupVisibility(true);
    };


    return (
        <nav className="navbar navbar-expand m-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/hamburger.png" alt="hamburger"/>
                </Link>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">Dishes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">Broadcast</Link>
                        </li>
                        {location.pathname === '/dashboard' ?
                            <li className="ml-auto nav-item rounded-box"><Link to="/add" className="nav-link"><i
                                className="fa-solid fa-bell"></i> Surprise Me!</Link>
                            </li>
                            : <li className="nav-item"></li>}
                    </ul>
                    <ul className="navbar-nav ms-auto ektu-upore">
                         <>
                                    <li className="nav-item mt-1 me-3">
                                        <button onClick={login}
                                                className={`nav-link ${location.pathname === '/' ? 'text-white' : ''}`}>
                                            Log In
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <div className={`rounded-box ${location.pathname === '/' ? "bg-white" : ''}`}>
                                            <button onClick={signup} className="nav-link">
                                                Sign Up
                                            </button>
                                        </div>
                                    </li>
                                </>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation