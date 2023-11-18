import React, {createContext, useContext} from 'react';
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['biscuit']);


    const login = (data) => {
        const access = data['access_token'];
        const refresh = data['refresh_token'];
        setCookie('biscuit', {access, refresh}, {path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)});
    };

    const logout = () => {
        removeCookie('biscuit');
        navigate('/');
    };

    const biscuit = cookies.biscuit;

    return (
        <AuthContext.Provider value={{login, logout, biscuit}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

