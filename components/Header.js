import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between shadow-lg  p-4 font-medium  text-xl bg-orange-300 ">
            <div className="flex items-center " >
                <img className="h-10 w-30" src="https://e7.pngegg.com/pngimages/47/533/png-clipart-swiggy-office-business-online-food-ordering-delivery-bangalore-business-food-text-thumbnail.png" alt="Logo" />
                <div>Sugha Foods</div>
            </div>
            <ul className="flex px-2 items-center">
                <li className="listItem flex px-4"><Link className= "listItem_links" to="/">Home</Link></li>
                <li className="listItem flex px-4"><Link className= "listItem_links" to="/about">About Us</Link></li>
                <li className="listItem flex px-4"><Link className="listItem_links" to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;
