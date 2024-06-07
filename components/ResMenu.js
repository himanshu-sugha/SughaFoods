import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestCategories from "./restCategories.js"; // Update the import statement

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const { resId } = useParams();

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=" +
            resId +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const data = await response.json();
        setResInfo(data);
       
    };

    // Filter the categories based on a condition
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    if (!categories) return <div className="font-extrabold text-center">Loading.....</div>;

    return (
        <div className="bg-orange-200 min-h-screen p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Menu</h1>
            {categories.map((category, index) => (
                <RestCategories key={index} data={category?.card?.card} />
            ))}
        </div>
    );
};

export default ResMenu;
