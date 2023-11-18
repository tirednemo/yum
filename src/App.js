import './App.css';
import {Route, Routes} from "react-router-dom";
import {lazy, Suspense, useState} from "react";
import {AuthProvider} from './components/auth/AuthContext';

import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Home from "./components/common/Home"
import Login from "./components/auth/Login";
import Register from './components/auth/Register';
import Restaurant from './components/restaurant/Restaurant';
const Dashboard = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./components/common/Dashboard'));
        }, 2000); // Simulate a 2-second delay
    });
});


function App() {

    const [loginVisibility, setLoginVisibility] = useState(false);
    const [signupVisibility, setSignupVisibility] = useState(false);

    return (
        <AuthProvider>
            <>
                <Navigation overlay={{setLoginVisibility, setSignupVisibility}}/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Suspense fallback= {<div style={{ textAlign: 'center', lineHeight: '600px' }}><i className="fa-regular fa-circle fa-beat fa-3x"></i><i className="fa-solid fa-circle fa-beat fa-3x"></i><i className="fa-regular fa-circle fa-beat fa-3x"></i></div>}><Dashboard /></Suspense> }/>
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
