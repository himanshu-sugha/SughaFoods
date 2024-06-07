import React from "react";

const About = () => {
    return (
        <div className="bg-orange-100 min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-black text-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold mb-4 text-center text-orange-400">About Us</h1>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-orange-400">Welcome Message:</h2>
                    <p className="text-lg text-white">Welcome to Sugha Foods! My name is Himanshu Sugha, and I am from Palampur, Himachal Pradesh. Currently, I am pursuing a B.Tech in Mathematics and Computing from NIT Hamirpur.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-orange-400">Our Story:</h2>
                    <p className="text-lg text-white">Growing up in the beautiful hills of Palampur, I developed a deep appreciation for the rich flavors and diverse cuisines of our region. This passion led me to create this food ordering platform, aiming to bring the best local dishes to your doorstep.</p>
                </div>
                <div className="text-center">
               
                </div>
            </div>
        </div>
    );
};

export default About;


