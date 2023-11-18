import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import './Restaurant.css'

const Menu = ({vendor, setTabVisibility}) => {
    const navigate = useNavigate();
    const [showDish, setShowDish] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);

    const [quickFilters, setQuickFilters] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(null)
    const [populars, setPopulars] = useState([]);
    const [groupedDishes, setGroupedDishes] = useState({});

    useEffect(() => {
        let categories = new Set();
        let groups = {}
        console.log(vendor)

        vendor.dish.forEach((dish) => {
            const {category, subCategory} = dish;
            if (category) {
                categories.add(category);
            }

            if (!groups[category]) {
                groups[category] = {};
            }
            if (!groups[category][subCategory]) {
                groups[category][subCategory] = [];
            }
            groups[category][subCategory].push(dish);
        });

        setQuickFilters(Array.from(categories));
        setGroupedDishes(groups)

        const sortedDishes = vendor.dish.sort((a, b) => b.cnt > a.cnt ? 1 : -1);
        setPopulars(sortedDishes.slice(0, 5));
    }, [vendor]);

    let banners = [
        "https://png.pngtree.com/png-clipart/20210704/original/pngtree-stylish-and-simple-vegetable-pizza-social-media-ads-png-image_6487233.jpg",
        "https://png.pngtree.com/png-clipart/20210704/original/pngtree-stylish-and-simple-vegetable-pizza-social-media-ads-png-image_6487233.jpg",
        "https://png.pngtree.com/png-clipart/20210704/original/pngtree-stylish-and-simple-vegetable-pizza-social-media-ads-png-image_6487233.jpg"
    ]

    function DishCard({dish}) {
        const {dishName, logo, price, rating, cnt} = dish;
        return (
            <div className="card p-2 shadow mb-4" onClick={() => {
                setTabVisibility(false);
                setShowDish(true)
                setSelectedDish(dish)
            }}>
                <img src={logo} className="card-img-top w-50 mx-auto" alt={dishName}/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{dishName}</h5>
                        <span>৳{price}</span>
                    </div>
                    <p className="card-text">&#9733; {rating} ({cnt})</p>
                </div>
            </div>
        );
    }


    function handleSort() {
        Object.keys(groupedDishes).forEach((category) => {
            Object.keys(groupedDishes[category]).forEach((subCategory) => {
                const sortedDishes = [...groupedDishes[category][subCategory]].sort((a, b) => a.price - b.price);
                setGroupedDishes((prevGroupedDishes) => ({
                    ...prevGroupedDishes,
                    [category]: {
                        ...prevGroupedDishes[category],
                        [subCategory]: sortedDishes,
                    },
                }));
            });
        });
    }

    return (
            <div className="row gx-lg-5">
                <div className="col-9">

                    {/*Advertisement banners*/}
                    <div className={'advertisement row mb-5 gap-1'}>
                        {banners.map((image, index) => (
                            <div key={index} className='col-lg-3 m-0 p-0'>
                                <img className="img-fluid" src={image} alt={'d'}/>
                            </div>
                        ))}
                    </div>


                    {/*Popular*/}
                    <div className={`row gy-4 mt-lg-5`}>
                        <h3>Don't miss out!</h3>

                        {populars.map((dish, dishIndex) => (
                            <div key={dishIndex} className="col-md-3">
                                <DishCard dish={dish}/>
                            </div>
                        ))}
                    </div>


                    {/*Quick filters*/}
                    <div className="row gap-2 mt-lg-5">
                        <button
                            className={`col-md-auto rounded-pill justify-content-center p-3 ${selectedFilter === null ? 'selected' : 'unselected'}`}
                            onClick={() => setSelectedFilter(null)}>
                            All
                        </button>
                        {quickFilters.map((category, index) => (
                            <button key={index}
                                    className={`col-md-auto rounded-pill justify-content-center p-3 ${selectedFilter === category ? 'selected' : 'unselected'}`}
                                    onClick={() => setSelectedFilter(category)}>
                                {category}
                            </button>
                        ))}

                        <label htmlFor="photo" className="col-md-auto rounded-pill justify-content-center p-3" onClick={handleSort}>
                            <i className="fa-solid fa-filter fa-lg"></i>
                        </label>
                    </div>

                    {/*Search results*/}
                    <div className={`row gy-4 mt-lg-3 ${1 === 1 ? '' : 'd-none'}`}>
                        {selectedFilter ? (
                            <h3>Search results for "{selectedFilter}"</h3>
                        ) : (
                            <h3>All dishes</h3>
                        )}
                        {Object.keys(groupedDishes).map((category, typeIndex) => (
                            (selectedFilter === category || !selectedFilter) && (
                                <div key={typeIndex} className="col-md-12">
                                    <h4>{category}</h4>
                                    {Object.keys(groupedDishes[category]).map((subCategory, subtypeIndex) => (
                                        <div className={`${subCategory ? '' : 'd-none'}`} key={subtypeIndex}>
                                            <p className={`${subCategory ? '' : 'd-none'}`}>{subCategory}</p>
                                            <div className="row">
                                                {groupedDishes[category][subCategory].map((dish, dishIndex) => (
                                                    <div key={dishIndex} className="col-md-3 mt-1">
                                                        <DishCard dish={dish}/>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        ))}
                    </div>


                </div>
            </div>
        )

}

export default Menu