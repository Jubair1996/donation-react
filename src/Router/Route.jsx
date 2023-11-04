import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import SingleCardDonate from "../Pages/Donation/SingleCardDonate";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('/donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/donate/:id",
                element: <SingleCardDonate></SingleCardDonate>,
                loader:()=>fetch('./donation.json')
                 
            }
        ]
    }
])

export default myCreatedRoute;