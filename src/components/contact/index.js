// Module
import React from "react";

// File
import Contact from "./contact";
import SubscribeCard from "../subscribeCard/subscribeCard";
import RecipesRecommendation from "../recommandations/RecipesRecommendation";

const IndexContact = () => {
    return(
        <div className="flex mt-12 justify-center">
            <div className="flex flex-col w-10/12">
                {/* Send Message */}
                <Contact />
                {/* subscription card */}
                <SubscribeCard />
                {/* Recommendation */}
                <div className='flex flex-col w-full mt-32'>
                    <div className='flex w-full justify-center items-center'>
                        <h1 className='text-2xl font-bold'>Check out the delicious recipe</h1>
                    </div>
                    <RecipesRecommendation />
                </div>
            </div>
        </div>
    );
};

export default IndexContact;