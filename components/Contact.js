import React from "react";

const ContactUs = () => {
    return (
        <div className="bg-orange-100 min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-black text-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold mb-4 text-center text-orange-400">Contact Us</h1>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-orange-400">Name:</h2>
                    <p className="text-lg text-white">Himanshu Sugha</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-orange-400">Address:</h2>
                    <p className="text-lg text-white">VPO Rohan, Teh. Palampur, Distt. Kangra, Himachal Pradesh</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-orange-400">Phone Number:</h2>
                    <p className="text-lg text-white">6230153184</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-orange-400">Email Address:</h2>
                    <p className="text-lg text-white">22bma013@nith.ac.in</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
