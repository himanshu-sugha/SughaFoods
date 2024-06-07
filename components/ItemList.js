import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    setCount(count + 1);
    dispatch(addItem(data));
    //from here it goes to items in cartslce and whann se cart me selector se nikal li and map lgakr item list me daal di
  };

  const handleRemoveItem = () => {
    if (count > 0) {
      setCount(count - 1);
      dispatch(removeItem()); 
    }
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300 last:border-none bg-orange-100 shadow-md rounded-lg my-2">
      <div className="flex-1">
        <div className="flex items-center mb-2">
          {data.card.info.itemAttribute?.vegClassifier === "NONVEG" ? (
            <span className="text-red-600">NON-VEG</span>
          ) : (
            <span className="text-green-600">VEG</span>
          )}
          {data.card.info.isBestseller && (
            <span className="ml-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
              BESTSELLER
            </span>
          )}
        </div>
        <h4 className="font-semibold text-lg text-gray-800">{data.card.info.name}</h4>
        <p className="text-gray-700">
          ₹ {data.card.info.price / 100 || data.card.info.defaultPrice / 100}
        </p>
        <p className="text-gray-600">{data.card.info.description}</p>
      </div>
      <div className="flex-shrink-0">
        {data.card.info.imageId && (
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.card.info.imageId}`}
            alt={data.card.info.name}
            className="w-24 h-24 object-cover rounded"
          />
        )}
        <div className="mt-2 flex items-center justify-center">
          {count === 0 ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleAddItem}
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                onClick={handleRemoveItem}
              >
                -
              </button>
              <p>{count}</p>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                onClick={handleAddItem}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
