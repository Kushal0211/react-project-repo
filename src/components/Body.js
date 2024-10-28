import { useEffect, useState } from "react";
// import resObj from "../utils/mockData";
import RestuarantCard, {nearToYouRestuarant} from "./RestuarantCard";
import Shimmer from "./Shimmer";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ({darkMode, toggleDarkMode}) => {

    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [searchedRestuarants, setSearchRestuarants] = useState([]);
    const [searchText, setSearchText] = useState("");
    

    console.log("Body rendered" + listOfRestuarants);

    useEffect(()=> {
        fetchData()
    }, []);


    const RestuarantCardNearer = nearToYouRestuarant(RestuarantCard);

    const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6262714&lng=77.27832269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const json = await data.json();

      console.log(json);
      
      setListOfRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setSearchRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleSearch = () => {
        const searchFilteredRestuarants = 
        listOfRestuarants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

        setSearchRestuarants(searchFilteredRestuarants);
        console.log(searchText);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
                <h1>Looks like you are offline</h1>
        )
    };


    return listOfRestuarants.length === 0  ? ( 
        <Shimmer/> 
    ) : 
    (
        <div className={`body ${darkMode ? 'dark-mode' : ''}`}>
            <div className="filter">
                <div className="search">                  
                
                <input placeholder="Search Your Favourite Restuarant here" type="text" className="search-box" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />

                <i className="fas fa-search search-icon" onClick={handleSearch}></i>

                    
                </div>


                
                <button className="filter-btn" 
                onClick={() => {

                    const filteredList = listOfRestuarants.filter((res)=>res.info.avgRating>4.4)
                    setSearchRestuarants(filteredList);
                }}
                > Top Rated Restuarants 
                </button> 

            
            </div>

            <div className="res-container">
                {searchedRestuarants.map(restuarant => 
                <Link key={restuarant.info.id} to={"/restaurant/" + restuarant.info.id}>
                    {restuarant.info.sla.lastMileTravel < 1.6  ? (
                        <RestuarantCardNearer resData = {restuarant}/> 
                    ) : 
                    (
                    <RestuarantCard resData = {restuarant}/>
                    )
                    }
                    
                </Link>)}
            </div>

        </div>
    )
}

export default Body;