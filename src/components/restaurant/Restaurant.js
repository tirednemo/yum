import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './Restaurant.css'
import Menu from "./Menu";
import Feed from "./Feed";
import {useAuth} from "../auth/AuthContext";

const Restaurant = () => {
    const [tabVisibility, setTabVisibility] = useState(true);
    const [activeTab, setActiveTab] = useState('menu');

    const {id} = useParams();
    const {biscuit} = useAuth();
    const [userDetails, setUserDetails] = useState(null);


    useEffect(() => {
        fetch('/restaurantData.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedRestaurant = data.find((item) => item.id === parseInt(id, 10));
                setUserDetails(selectedRestaurant);
            })
            .catch((error) => {
                console.error('Error fetching restaurant data:', error);
            });
    }, [id]);


    if (!userDetails) {
        return <div>Loading...</div>; // Add a loading state or UI
    }

    return (
        <div className="container mb-lg-5">
            <div style={{'height': '40vh', 'overflow': 'hidden'}}>
                <img
                    src={"https://timelinecovers.pro/facebook-cover/download/food-delicious-pizza-facebook-cover.jpg"}
                    className="cover m-0" alt={''}/>
                <h1 style={{marginTop: "70px"}}>Pizza Hut</h1>
            </div>

            <div>
                {tabVisibility &&
                    <ul className="nav nav-pills justify-content-center mb-5 border-0">
                        <li className="nav-item">
                            <button
                                className={`nav-link rounded-pill ${activeTab === 'menu' ? 'active bg-transparent text-dark border border-black border-2' : ''}`}
                                onClick={() => setActiveTab('menu')}
                            >
                                <h5 className="text-uppercase">Menu</h5>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link rounded-pill ${activeTab === 'feed' ? 'active bg-transparent text-dark border border-black border-2' : ''}`}
                                onClick={() => setActiveTab('feed')}
                            >
                                <h5 className="text-uppercase">Feed</h5>
                            </button>
                        </li>
                    </ul>
                }

                <>
                    {activeTab === 'menu' ? (
                        <Menu vendor={userDetails} setTabVisibility={setTabVisibility}/>
                    ) : (
                        <Feed vendor={userDetails}/>
                    )}
                </>
            </div>
        </div>
    )
}

export default Restaurant