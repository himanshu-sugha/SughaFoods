// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
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
                index: true,
                element: <AppBody />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter} />);
