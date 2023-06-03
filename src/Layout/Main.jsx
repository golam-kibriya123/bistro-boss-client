import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shard/Footer/Footer";
import NavBar from "../Pages/Shard/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Main;