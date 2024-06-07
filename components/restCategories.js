import { useState } from "react";
import ItemList from "./ItemList";

const RestCategory = (props) => {
    const [showItems, setShowItems] = useState(false);

    return (
        <div className="res-menu-recommended border-b-2 border-y-0 border-x-0 border-black bg-orange-400">
            <div 
                className="res-menu-title flex justify-between items-center p-4 cursor-pointer bg-orange-300 text-black"
                onClick={() => setShowItems(!showItems)}
            >
                <h3 className="text-lg font-semibold">
                    {props?.data?.title} ({props?.data?.itemCards.length})
                </h3>
                <span className="px-2">{showItems ?  '▲':'▼'}</span>
            </div>
            {showItems && (
                <div className="text-center font-normal bg-orange-400">
                    {props?.data?.itemCards.map((item) => (
                        <ItemList key={item.card.info.id} data={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestCategory;
