import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (<div className="bg-orange-100 h-screen">
        <div className="p-6 bg-white shadow-2xl rounded-lg m-4 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-orange-600">Shopping Cart</h1>
                
                    <button
                        onClick={handleClearCart}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
                    >
                        Clear Cart
                    </button>
                
            </div>
            {cartItems.length === 0 ? (
                <p className="text-gray-700 text-center text-lg">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <ItemList key={index} data={item} />
                    ))}
                    <div className="flex justify-between items-center mt-4 border-t-2 pt-4">
                        <p className="text-xl font-semibold text-gray-800">
                            Total: ₹{cartItems.reduce((acc, item) => acc + (item.card.info.price / 100 || item.card.info.defaultPrice / 100) * item.quantity, 0).toFixed(2)}
                        </p>
                        <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default Cart;
