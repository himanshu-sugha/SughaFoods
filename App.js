import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import AppBody from './components/AppBody';
import ResMenu from './components/ResMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const AppComp = () => {
    const [user, setUser] = useState("User");

    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedUser: user, setUser }}> {/* Changed setuser to setUser */}
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
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
            {
                path: "restaurants/:resId",
                element: <ResMenu />
            },{
                    path: "cart",
                    element: <Cart />
                
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter} />);


