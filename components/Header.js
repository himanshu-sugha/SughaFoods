import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center shadow-lg p-4 font-medium text-xl bg-orange-300">
            <div className="flex items-center space-x-2">
                <img className="h-10 w-auto" src="https://e7.pngegg.com/pngimages/47/533/png-clipart-swiggy-office-business-online-food-ordering-delivery-bangalore-business-food-text-thumbnail.png" alt="Logo" />
                <div className="text-lg font-semibold">Sugha Foods</div>
            </div>
            <ul className="flex items-center space-x-4">
                <li className="listItem"><Link className="listItem_links" to="/">Home</Link></li>
                <li className="listItem"><Link className="listItem_links" to="/about">About Us</Link></li>
                <li className="listItem"><Link className="listItem_links" to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;
