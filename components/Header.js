import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
    const data = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between items-center shadow-lg p-4 font-medium text-xl bg-orange-300">
            <Link to="/">
                <div className="flex items-center space-x-2">
                    <img
                        className="h-10 w-auto"
                        src="https://e7.pngegg.com/pngimages/47/533/png-clipart-swiggy-office-business-online-food-ordering-delivery-bangalore-business-food-text-thumbnail.png"
                        alt="Logo"
                    />
                    <div className="text-lg font-semibold">Sugha Foods</div>
                </div>
            </Link>
            <ul className="flex items-center space-x-4">
                <li className="listItem">
                    <Link className="listItem_links" to="/about">About Us</Link>
                </li>
                <li className="listItem">
                    <Link className="listItem_links" to="/contact">Contact</Link>
                </li>
                <li className="listItem flex items-center">
                    <Link className="listItem_links flex items-center text-black" to="/cart">
                    🛒 <span className="ml-1 text-sm text-blue-900 font-bold align-top italic">{cartItems.length}</span>
                    </Link>
                </li>
                <li className="text-red-800 font-bold">Hi! {data.loggedUser}</li>
            </ul>
        </div>
    );
};

export default Header;
