import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Home/Contact";
import Home from "../Pages/Home/Home";
import MyProjects from "../Pages/Home/MyProjects";
import Navbar from "../Pages/Navbar/Navbar";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
            
        
        ]
    }
])

export default router;