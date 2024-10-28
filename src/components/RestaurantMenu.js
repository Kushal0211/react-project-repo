// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";


const RestuarantMenu = () => {

    const {resId}  = useParams();
    const [showIndex,setShowIndex] = useState(null);

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>

    const { 
        name, 
        cuisines,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        locality
    } = resInfo?.cards[2]?.card?.card?.info;

    console.log("res-card-details");
    console.log(resInfo?.cards[2]?.card?.card?.info);

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    
    const categories = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories);

    return (
        <div className="menu h-full">
            <h3 className="text-center my-10 text-3xl font-medium">{name}</h3>

            <div className="flex justify-center items-center">
                <div className="w-[800px] bg-custom-color rounded-2xl
                 text-yellow-300 mx-3 my-3 px-3 py-3 
                 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                    
                    <div className="text-lg font-medium">
                        {avgRating + "⭐ (" + totalRatingsString + ")" + " • " + costForTwoMessage}
                    </div>

                    <div className="text-lg font-medium text-red-600">
                        {cuisines.join(", ")}
                    </div>

                    <div className="">
                        {"Outlet" + "  -  " + locality}
                    </div>
                </div>

            </div>

            <div className="flex justify-center items-center">
                <div className="mx-3 my-3 px-3 py-3">
                    {categories.map((c,index) => 
                    <ResCategory 
                    data={c.card?.card}
                    key={c.card?.card.title}
                    showItems={index === showIndex ? true : false}
                    setShowItems = {()=> setShowIndex(index)}
                    />)}
                </div>
            </div> 

        </div>
    )
}

export default RestuarantMenu;