import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

// const styleCard = {
//     backgroundColor : "#310D60"
// }

const RestuarantCard = (props) => {

    console.log(props);
    const {resData} = props;

    const {cloudinaryImageId,name,avgRating,costForTwo,areaName,sla} = resData.info;

    const displayedCuisines = resData.info.cuisines.length > 2 ? resData.info.cuisines.slice(0, 2).join(", ") + "..." : resData.info.cuisines.join(", ");

    const {loggedInUser} = useContext(UserContext);

    // we can also write style={styleCard} inside div
    return (
        <div className="res-card">
            <img className="res-img"
                alt="res-image"
                src= { CDN_URL + cloudinaryImageId}
            />
            <h3 className="res-title foodDetails">{name}</h3>
            <h4 className="foodDetails">{avgRating + "⭐" }</h4>
            <h4 className="foodDetails">{displayedCuisines}</h4>
            <h4 className="foodDetails">{areaName}</h4>
            {/* <h4>{loggedInUser}</h4> */}
        </div>
    )
}

export const nearToYouRestuarant = (RestuarantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-pink-600 text-white m-2 p-2 rounded-md text-sm"> 
                    Nearer to you
                </label>
                <RestuarantCard {...props}/>
            </div>
        );
    };
};


export default RestuarantCard;