import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Menu/Menu/OurMenu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <OurMenu></OurMenu>

            },
            {
                path: '/shop/:title',
                element: <Shop></Shop>
            } ,
            {
                path: '/login' ,
                element: <Login></Login>
            }

        ]
    },
]);
export default router