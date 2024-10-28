import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import RestuarantCard from "./components/RestuarantCard";
import { useState } from "react";
import "../index.css"; // Import your CSS file from the root directory
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const About = lazy(() => import('./components/About'));

const AppLayout = () => {

    const [darkMode, setDarkMode] = useState(false);

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Kushal 10 "
        }

        setUserName(data.name);
    }, []);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('darkMode', !darkMode);
    };


    return (

        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className={`app-body ${darkMode ? 'dark-mode' : ''}`}>
                    <Header />

                    <div className="toggle-dark-mode" onClick={toggleDarkMode}>
                        <div className={`moon-icon ${darkMode ? 'dark-mode-moon' : ''}`}>
                            <i className="fas fa-moon"></i>
                        </div>
                    </div>

                    <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>

                        <Outlet />

                    </UserContext.Provider>

                </div>
            </UserContext.Provider>
        </Provider>
    );
}

{/* <Body darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/> */ }

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....</h1>}>
                    <About />
                </Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestuarantMenu />
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);