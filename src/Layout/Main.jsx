import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shard/Footer/Footer";
import NavBar from "../Pages/Shard/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;