import { useEffect, useState } from "react";

const User = () => {

    useEffect(()=>{

        const timer = setInterval(()=>{
            console.log("User Functional Component Set Interval called from useEffect")
        },1000);


        return(()=>{
            console.log("Unmount User Func Comp");
            clearInterval(timer);
        })
    },[]);

    return(
        <div>
            <h1>Here is your Profile</h1>
        </div>
    );

}

export default User;