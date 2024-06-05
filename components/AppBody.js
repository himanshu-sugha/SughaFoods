import React, { useEffect, useState } from 'react';
import { resapi } from './constants';

const Card = ({ name, rating, cuisines, costForTwo, cloudinaryImageId }) => {
    return (
        <div className="m-4 p-4 w-[250px] rounded">
            <img
                className="cardlogo  h-3/5 justify-center"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt={name}
            />
            <ul className='menu h-2/5 text-white bg-slate-700'>
                <li><h3>{name}</h3></li>
                <li className='menuItem '>{rating}</li>
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
            const topRated = restaurants.filter(res => res.info.avgRating > 4.1);
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
        <div className='AppBody  bg-orange-100'>
            <div className='BodyTitle flex justify-evenly text-xl p-5 '>
                <button className="    rounded-md px-4  bg-blue-500 border-none text-white" onClick={filterTopRatedRestaurants}>
                    {showTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
                </button>
                <div className='search '>
                    <input className=' border-4 px-6 border-solid  rounded-md  border-black  text-black bg-orange-100'
                        placeholder="Search for restaurants..."
                        type='text'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className='  mx-3 px-3 border-none rounded-md text-white bg-blue-500' onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="Allcard flex flex-wrap ">
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
