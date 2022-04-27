import React from "react";

const Selection = () => {
    return(
        <div className="w-full flex flex-row relative justify-between">
            {[...Array(7)].map((x, i) => {
                if(i < 5){
                    return(
                        <button className={`p-2 sm:p-6 text-sm sm:text-lg mx-1 font-bold border border-black rounded-xl ${i===0 ? "bg-black text-white" : ""}`} key={i}>{i+1}</button>
                    )
                } else if(i === 5) {
                    return(
                        <button className="p-2  sm:p-6 text-sm sm:text-lg  mx-1 font-bold border border-black rounded-xl" key={i}>...</button> 
                    )
                }
                return(
                    <button className="p-2  sm:p-6 text-sm sm:text-lg  mx-1 font-bold border border-black rounded-xl" key={i}> ) </button> 
                )
                
            })}
        </div>
    );
};

export default Selection;