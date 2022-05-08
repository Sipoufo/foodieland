// Module
import React from "react";

const Contact = () => {
    return(
        <div className="flex flex-col w-full">
            <h1 className="w-full text-center text-4xl font-bold">Contact us</h1>
            <form className="mt-10 flex flex-row justify-between items-start gap-10">
                {/* Chef picture */}
                <div className="hidden lg:flex w-4/12 h-96 bg-gradient-to-b from-white to-emerald-100 rounded-xl overflow-hidden justify-center">
                    <img src={process.env.PUBLIC_URL + "/images/chef2.png"} className="w-full h-full object-cover" alt="chef"/>
                </div>
                {/* Information for sent message */}
                <div className="flex flex-col grow items-center gap-5">
                    <div className="flex flex-col items-center sm:flex-row justify-between w-full gap-10">
                        <div className="flex flex-col w-full sm:w-6/12">
                            <label className="text-sm font-light">NAME</label>
                            <input type="text" name="name" className="w-full border border-gray-300 p-3 rounded-xl mt-2 font-light text-sm" placeholder="Enter your name" />
                        </div>
                        <div className="flex flex-col w-full sm:w-6/12">
                            <label className="text-sm font-light">EMAIL ADDRESS</label>
                            <input type="text" name="email" className="w-full border border-gray-300 p-3 rounded-xl mt-2 font-light text-sm" placeholder="Your email address" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:flex-row justify-between w-full gap-10">
                        <div className="flex flex-col w-full sm:w-6/12">
                            <label className="text-sm font-light">SUBJECT</label>
                            <input type="text" name="subject" className="w-full border border-gray-300 p-3 rounded-xl mt-2 font-light text-sm" placeholder="Enter subject" />
                        </div>
                        <div className="flex flex-col w-full sm:w-6/12">
                            <label className="text-sm font-light">ENQUIRY TYPE</label>
                            <select className="w-full border border-gray-300 p-3 rounded-xl mt-2 font-light text-sm bg-white">
                                <option value="advertising">Advertising</option>
                                <option value="advertising">Advertising</option>
                                <option value="advertising">Advertising</option>
                                <option value="advertising">Advertising</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full gap-10">
                        <div className="flex w-full">
                            <textarea className="w-full h-40 border border-gray-300 p-3 rounded-xl mt-2 font-light text-sm bg-white" placeholder="Enter your message" />
                        </div>
                    </div>
                    <div className="flex justify-start w-full">
                        <button className="px-12 py-4 text-white bg-black text-sm rounded-xl">submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;