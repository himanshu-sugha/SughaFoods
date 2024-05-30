import React, { useEffect, useState } from 'react';
import { resapi } from './constants';

const Card = ({ name, rating, cuisines, costForTwo, cloudinaryImageId }) => {
    return (
        <div className="card">
            <img 
                className="cardlogo" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
                alt={name} 
            />
            <ul className='menu'>
                <li><h3>{name}</h3></li>
                <li className='menuItem'>{rating}</li>
                <li className='menuItem po'><p>{cuisines.join(', ')}</p></li>
                <li className='menuItem'>{costForTwo}</li>
            </ul>
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
        } else {//default jb false thi
            const topRated = restaurants.filter(res => res.info.avgRating > 4.5);
            setFilteredRestaurants(topRated);
        }
        //hr baar change ho ra irrespective of change
        setShowTopRated(!showTopRated);
    };

    const handleSearch = () => {
        const searchedRestaurants = restaurants.filter(res =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(searchedRestaurants);
    };

    if (loading) {
        return <div><h1>Loading...</h1></div>;
    }

    return (
        <div className='AppBody'>
            <div className='BodyTitle'>
                <button onClick={filterTopRatedRestaurants}>
                    {showTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
                </button>
                <div className='search'>
                    <input 
                        placeholder="Search for restaurants..." 
                        type='text' 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="Allcard">
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
