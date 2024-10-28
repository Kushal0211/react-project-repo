import React from 'react'
import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({data, showItems,setShowItems}) => {
    
    const handleClickMenu = () => {
        setShowItems();
    };
    
return(
    <div className="flex justify-center items-center">

        <div className="w-[900] border-b-8  mx-3 my-3 px-3 py-3">

            <div className="flex justify-between" onClick={handleClickMenu} >
                <span className="text-2xl">{data.title + " (" + data.itemCards.length + ")" }</span>
                <span className="text-2xl">{"⬇️"}</span>
            </div>
            
            <div className="flex justify-center">
                {showItems && <ItemList items={data?.itemCards}/>}
            </div>
        </div>

        
    </div>
);
}

export default ResCategory;