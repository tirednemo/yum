import './App.css';
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import {AuthProvider} from './components/auth/AuthContext';

import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Home from "./components/common/Home"
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/common/Dashboard";
import Restaurant from "./components/restaurant/Restaurant";


function App() {

    const [loginVisibility, setLoginVisibility] = useState(false);
    const [signupVisibility, setSignupVisibility] = useState(false);

    return (
        <AuthProvider>
            <>
                <Navigation overlay={{setLoginVisibility, setSignupVisibility}}/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="restaurant/:id" element={<Restaurant/>}/>
                </Routes>

                <Login visibility={{loginVisibility, setLoginVisibility}}/>
                <Register visibility={{signupVisibility, setSignupVisibility}}/>
                <Footer/>
            </>
        </AuthProvider>
    );
}

export default App;
