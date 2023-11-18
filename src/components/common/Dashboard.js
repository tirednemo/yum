import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import './Dashboard.css';

const Dashboard = () => {
    let banners = [
        "https://png.pngtree.com/png-clipart/20210704/original/pngtree-stylish-and-simple-vegetable-pizza-social-media-ads-png-image_6487233.jpg",
        "https://png.pngtree.com/png-clipart/20210704/original/pngtree-stylish-and-simple-vegetable-pizza-social-media-ads-png-image_6487233.jpg",
        "https://png.pngtree.com/png-clipart/20210704/original/pngtree-stylish-and-simple-vegetable-pizza-social-media-ads-png-image_6487233.jpg"
    ]
    let quickFilters = ['All', 'Burger', 'Pizza', 'Biriyaani'];
    const [quickFilter, setQuickFilter] = useState(quickFilters[0]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searched, setSearched] = useState(false);
    let cuisines = [
        {
            name: 'Bangla',
            logo: 'https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg'
        },
        {
            name: 'Indian',
            logo: 'https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg',
        },
        {
            name: 'Thai',
            logo: 'https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg'
        }
    ]
    let channels = [
        {
            name: 'ch 1',
            logo: '91k'
        },
        {
            name: 'ch 2',
            logo: '41k',
        },
        {
            name: 'ch 3',
            logo: '51k'
        }
    ]

    useEffect(() => {
        fetch('/restaurantData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setAllRestaurants(data);
            })
            .catch((error) => {
                console.error('Error fetching restaurant data:', error.message);
            });
    }, []);

    function RestaurantCard({name, logo, priceRange, rating, cnt}) {
        return (
            <div className="card p-2 shadow">
                <img src={logo} className="card-img-top w-50 mx-auto" alt={name}/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{name}</h5>
                        <span>{priceRange}</span>
                    </div>
                    <p className="card-text">&#9733; {rating} ({cnt})</p>
                </div>
            </div>
        );
    }

    function SideLists({name, logo, text}) {
        return (
            <div className={'my-4'}>
                <h6>{name}</h6>
                <small>{logo} {text}</small>
            </div>
        );
    }

    function handleSearch() {
        const filtered = allRestaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filtered);
        setSearched(true);
    }

    return (
        <div className="container mb-lg-5">
            <div className="row gx-lg-5">
                <div className="col-9">


                    {/*Advertisement banners*/}
                    <div className={'advertisement row mb-5 gap-1'}>
                        {banners.map((image, index) => (
                            <div key={index} className='col-lg-3 m-0 p-0'>
                                <img className="img-fluid" src={image}/>
                            </div>
                        ))}
                    </div>


                    {/*Search*/}
                    <div className="input-group rounded-pill">
                        <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="Search dish/restaurant/cuisine..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn" type="button" onClick={handleSearch}>
                            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                        </button>

                    </div>


                    {/*Quick filters*/}
                    <div className="row gap-1 mt-lg-5">
                        {quickFilters.map((category, index) => (
                            <button key={index}
                                    className={`col-md-auto rounded-pill p-2 ${quickFilter === category ? 'selected' : 'unselected'}`}
                                    onClick={() => setQuickFilter(category)}>
                                {category}
                            </button>
                        ))}
                    </div>


                    {/*Search results*/}
                    {searched && (
                        <div className={`row gy-4 mt-lg-3`}>
                            <h5>Showing search results</h5>
                            {searchResults.map((restaurant, index) => (
                                <div key={index} className="col-md-3">
                                    <RestaurantCard
                                        name={restaurant.name}
                                        logo={restaurant.logo}
                                        priceRange={restaurant.priceRange}
                                        rating={restaurant.rating}
                                        cnt={restaurant.cnt}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/*Recommendation*/}
                    <div className={`row gy-4  mt-lg-5`}>
                        <h5>Our picks for you</h5>
                        {allRestaurants.map((restaurant, index) => (
                            <div key={index} className="col-md-3">
                                <Link to={`/restaurant/${restaurant.id}`}>
                                    <RestaurantCard
                                        name={restaurant.name}
                                        logo={restaurant.logo}
                                        priceRange={restaurant.priceRange}
                                        rating={restaurant.rating}
                                        cnt={restaurant.cnt}
                                    /></Link>
                            </div>
                        ))}
                    </div>

                    {/*Cuisine filter*/}
                    <div className={'cuisines row mt-lg-5 gap-1'}>
                        <h5>Explore</h5>
                        {cuisines.map((cuisine, index) => (
                            <div key={index} className="col-lg-3 m-0 p-0">
                                <div style={{position: 'relative', textAlign: 'center'}}>
                                    <img className="img-fluid" src={cuisine.logo} alt={cuisine.name}/>
                                    <h4 className="position-absolute top-50 start-50 translate-middle text-white">
                                        {cuisine.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-3">
                    {/*Channels*/}
                    <div className="rounded-2 border-0 shadow p-4 my-4">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Live now &ensp; <i className="fa-solid fa-video"></i></h5>
                            <span><Link to={'/'}>View all</Link></span>
                        </div>

                        {channels.map((restaurant, index) => (
                            <div key={index}>
                                <SideLists
                                    name={restaurant.name}
                                    logo={restaurant.logo}
                                    text={'watching'}
                                />
                            </div>
                        ))}
                    </div>

                    {/*Vlogs*/}
                    <div className="rounded-2 border-0 shadow p-4 my-4">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Trending &ensp; <i className="fa-solid fa-hashtag"></i></h5>
                            <span><Link to={'/'}>View all</Link></span>
                        </div>

                        {channels.map((restaurant, index) => (
                            <div key={index}>
                                <SideLists
                                    name={restaurant.name}
                                    logo={restaurant.logo}
                                    text={'views'}
                                />
                            </div>
                        ))}
                    </div>

                    {/*Vloggers*/}
                    <div className="rounded-2 border-0 shadow p-4 my-4">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Most followed &ensp; <i className="fa-solid fa-user"></i></h5>
                            <span><Link to={'/'}>View all</Link></span>
                        </div>

                        {channels.map((restaurant, index) => (
                            <div key={index}>
                                <SideLists
                                    name={restaurant.name}
                                    logo={restaurant.logo}
                                    text={'followed'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard