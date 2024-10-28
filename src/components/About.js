import UserContext from "../utils/UserContext";
import User from "./User";
// import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
     
    componentDidMount(){
        console.log("Parent Mounts");
    };

    render(){
        console.log("Parent renders");

        return (
            <div className="about w-[600px] ">


                <h2>This is just About us</h2>
                <p>Currently we are just creating it</p>
                <div>
                    loggedInUser 
                    <UserContext.Consumer>
                        {
                        (  {loggedInUser}  )  => <h1>{loggedInUser}</h1>
                        }
                    </UserContext.Consumer>
                </div>

                <div className="team-details">
                    <p>Meet Our Team</p>
                    <User/>
                    {/* <UserClass/> */}
                </div>
            </div>
        );
        
    }

}

export default About;