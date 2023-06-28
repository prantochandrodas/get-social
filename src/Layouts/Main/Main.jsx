import { Outlet } from "react-router-dom";
import Headerr from "../../pages/Header/Headerr";
import Peoples from "../../pages/Peoples/Peoples";

const Main = () => {
    return (
        <div className="lg:flex justify-start">
           
            <div className="w-[320px]">
                <Headerr></Headerr>
            </div>
            <Outlet></Outlet>
            <Peoples></Peoples>
        </div>
    );
};

export default Main;