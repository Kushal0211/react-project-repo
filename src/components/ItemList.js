import { useDispatch } from "react-redux";
import { CDN_URL } from ".././utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    console.log("items");
    console.log(items);

    const dispatch = useDispatch();

    const handleItems = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div className="w-[900px]">
            <div>
                {items.map(item =>
                    <div key={item?.card?.info?.name} className="mx-2 my-3 px-2 py-3 flex justify-between border-b border-l-gray-500">

                        <div className=" w-[70%]">

                            <div className="mx-2 px-2 font-medium">{item?.card?.info?.name}</div>

                            <div className="mx-2 my-2 px-2">
                                <span>₹</span>
                                {(item?.card?.info?.price) / 100 || (item?.card?.info?.defaultPrice) / 100}
                                {item?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG' ? '  🟥  ' : '  🟩  '}
                            </div>

                            <div className="mx-2 my-2 px-2">
                                <span>⭐</span>
                                <span>{(item?.card?.info?.ratings?.aggregatedRating?.rating)}</span>
                            </div>

                            <div className="mx-2 my-2 px-2">{item?.card?.info?.description}</div>

                        </div>



                        <div className="w-[30%]">

                            <img
                                src={CDN_URL + item?.card?.info?.imageId}
                                className="w-[170px] h-[110px] my-8 mx-5 rounded-xl "
                            />

                            <div className="relative left-16 top-[-60]">
                                <button className=" bg-blue-600  left-36 rounded-md px-2 mx-3 py-2 my-2" 
                                onClick={() => handleItems(item)}
                                >Add+</button>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemList;