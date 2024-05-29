import React, { useEffect, useState } from 'react';
import { reapi } from './constants';



const Card = ({ name, rating, cuisines, costForTwo, cloudinaryImageId }) => {
    return (
        <div>
            <div className="card">
                <img className="cardlogo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} />
                <ul className='menu'>
                    <li><h3>{name}</h3></li>
                    <li className='menuItem'>{rating}</li>
                    <li className='menuItem  po'><p>{cuisines.join(', ')}</p></li>
                    <li className='menuItem'>{costForTwo}</li>
                </ul>
            </div>
        </div>
    );
};

const AppBody = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [Toprestaurants, setTopRestaurants] = useState([]);
    const fetchdata = async () => {
        try {
            const json = await fetch(reapi);
            const data = await json.json();
            const restaurantsData = data.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurants(restaurantsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const filterTopRatedRestaurants = () => {
        const filteredRestaurants = restaurants.filter(res => res.info.avgRating > 4.2);
        setRestaurants(filteredRestaurants);
    };
//  if(restaurants.length==0){
//     return <div>LOading</div>;
//  }

 return(restaurants.length==0)?<div>LOading</div>:(
        <div className='AppBody'>
            <div className='BodyTitle'>
                <button onClick={filterTopRatedRestaurants}>Top Rated Restaurant</button>
                <div className='search'>
                    <input></input>
                    <button>Search</button>
                </div>
            </div>

            <div className="Allcard">
                {restaurants.map((restaurant, index) => (
                    <Card
                        key={index}
                        name={restaurant.info.name}
                        rating={restaurant.info.avgRating}
                        cuisines={restaurant.info.cuisines}
                        costForTwo={restaurant.info.costForTwo}
                        cloudinaryImageId={restaurant.info.cloudinaryImageId} // Correct prop name
                    />
                ))}
            </div>
        </div>
    );
};

export default AppBody;
