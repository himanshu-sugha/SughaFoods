// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AppBody from './components/AppBody';

const AppComp = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const Approuter = createBrowserRouter([
    {
        path: "/",
        element: <AppComp />,
        errorElement: <Error />,
        children: [
            {
                index: "/",
                element: <AppBody />
            },
            {
                path: "./components/about",
                element: <About />
            },
            {
                path: "./components/contact",
                element: <Contact />
            }, 
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter} />);
