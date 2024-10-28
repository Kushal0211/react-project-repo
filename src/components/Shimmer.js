import { useEffect, useState } from "react";
import { quotes } from "../utils/quotes.js";
import Loader from "./Loader.js";



const Shimmer = () => {

    const [quote, setQuote] = useState("");

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        setQuote(randomQuote);
    }, []);

    return (
        <div className="shimmer-container">

            <div className="shimmer-card-container">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>

                
            </div>

                {/* <div>
                    <Loader />
                </div>  */}

            <div className="quote-container">
                <p className="food-quote">{quote}</p>
            </div>
        </div>
    )
}

export default Shimmer;