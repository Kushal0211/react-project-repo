import {useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")

    const {loggedInUser} = useContext(UserContext);
    
    // console.log("Header rendered");


    useEffect(()=>{
        console.log("Use Effect Hook is Called");
    },[])

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
        <div className="header border-2">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>

            <div className="nav-items relative right-80">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/cart"}>  Cart {"[" + cartItems.length + "]"}  </Link></li>


                    {/* <li>{loggedInUser}</li> */}
                  
                    <button className="login-btn w-24 h-10" onClick={()=> {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        console.log(btnNameReact);
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;