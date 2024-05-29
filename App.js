
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "Header.js";

const root = ReactDOM.createRoot(document.querySelector(".hi"));



const Card = () => {
    return (<div  ><div className="card">
        <img  className="cardlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ECWBVq3P_jFGe7BFA0hhe2X-2L9M3Uh-jyvUolzcZQ&s" />
        <ul>
            <li>Burger</li>
            <li>3*</li>
            <li> some inko</li>
        </ul>
    </div>
    </div>)
};

const Body = () => {
    return (<div className="Allcard"><Card />
    <Card/>
    <Card/>
    
    <Card/>
   
    
    </div>

    )
};

const AppComp = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

root.render(<AppComp />);
