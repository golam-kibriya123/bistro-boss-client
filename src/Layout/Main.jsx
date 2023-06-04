import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shard/Footer/Footer";
import NavBar from "../Pages/Shard/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    const login = location.pathname.includes('login');
    const signup = location.pathname.includes('signup');
    return (
        <div>
            {signup || login || <NavBar></NavBar>}
            <Outlet></Outlet>
            {signup || login || <Footer></Footer>
            }
        </div>
    );
};

export default Main;