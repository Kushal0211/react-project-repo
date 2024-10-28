import React from "react";

class UserClass extends React.Component{

    constructor(){
        super();

        this.state = {
            userInfo : {
                name : "Dummy Name",
                location : "ABCDEFGHI",
                avatar_url : ""
            }
        }

        console.log("Child Constructor");
    }

    async componentDidMount(){
        // console.log("Child Mounts");

        // const data = await fetch('https://api.github.com/users/Kushal0211');
        // const json = await data.json();

        // console.log(json);

        // this.setState({
        //     userInfo : json
        // })

        this.timer = setInterval(()=> {
            console.log("Hello SetInterval used here");
        },1000)

        console.log(this.timer);
        
    }
    

    componentDidUpdate(){
        console.log("Child componentDidUpdate Called");
    }

    componentWillUnmount(){
        console.log("Child ComponentWillUnmount Called");

        clearInterval(this.timer);
    }

    render(){

        console.log("Child Renders");

        const {name,location,avatar_url} = this.state.userInfo;
        return(
            <div className="user-details">
                
                <img src={avatar_url}/>
                <h2>Name of Engineer : {name}</h2>
                <h2>Location : {location}</h2>                            
            </div>
        );
    }
}

export default UserClass;