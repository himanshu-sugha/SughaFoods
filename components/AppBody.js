import React, { useEffect, useState } from 'react';
import { resapi } from './constants';

const Card = ({ name, rating, cuisines, costForTwo, cloudinaryImageId }) => {
    return (
        <div className="m-4 p-4 w-64 rounded-lg shadow-lg bg-white hover:shadow-xl hover:scale-105 transition duration-300 transform-gpu">
            <img
                className="w-full h-40 object-cover rounded-t-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt={name}
            />
            <div className='p-4 text-gray-800'>
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <p className="text-sm text-gray-600">{rating}</p>
                <p className="text-sm text-gray-600">{cuisines.join(', ')}</p>
                <p className="text-sm text-gray-600">{costForTwo}</p>
            </div>
        </div>
    );
};

const AppBody = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showTopRated, setShowTopRated] = useState(false);
    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch(resapi);
            const data = await response.json();
            const restaurantsData = data.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurants(restaurantsData);
            setFilteredRestaurants(restaurantsData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filterTopRatedRestaurants = () => {
        if (showTopRated) {
            setFilteredRestaurants(restaurants);
        } else {
            const topRated = restaurants.filter(res => res.info.avgRating > 4.1);
            setFilteredRestaurants(topRated);
        }
        setShowTopRated(!showTopRated);
    };

    const handleSearch = () => {
        const searchedRestaurants = restaurants.filter(res =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(searchedRestaurants);
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><h1 className="text-2xl font-semibold">Loading...</h1></div>;
    }

    return (
        <div className="AppBody bg-orange-100 min-h-screen p-5">
            <div className="BodyTitle flex flex-col sm:flex-row justify-between items-center text-xl p-5 mb-6 bg-orange-200 rounded-lg shadow-md">
                <button className="rounded-md px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300" onClick={filterTopRatedRestaurants}>
                    {showTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
                </button>
                <div className="search flex items-center mt-4 sm:mt-0">
                    <input className="border-2 px-4 py-2 rounded-md border-gray-300 text-black bg-white focus:outline-none focus:border-blue-500 transition duration-300"
                        placeholder="Search for restaurants..."
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="ml-3 px-4 py-2 border-none rounded-md text-white bg-blue-500 font-semibold hover:bg-blue-600 transition duration-300" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="Allcard flex flex-wrap justify-center">
                {filteredRestaurants.map((restaurant, index) => (
                    <Card
                        key={index}
                        name={restaurant.info.name}
                        rating={restaurant.info.avgRating}
                        cuisines={restaurant.info.cuisines}
                        costForTwo={restaurant.info.costForTwo}
                        cloudinaryImageId={restaurant.info.cloudinaryImageId}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppBody;
