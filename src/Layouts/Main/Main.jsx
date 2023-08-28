import { Outlet } from "react-router-dom";
import Headerr from "../../pages/Header/Headerr";
import Peoples from "../../pages/Peoples/Peoples";
import MobileNav from "../../pages/MobileNav/MobileNav";

const Main = () => {
    return (
        <div>
            <div className=" hidden lg:block">

     
                    <Headerr></Headerr>
               <div className="pt-[100px]">
               <Outlet></Outlet>
               </div>
               
            </div>
            <div className="lg:hidden">

               
                <Outlet></Outlet>
              <div className="fixed bottom-0 right-0 left-0">
                  <MobileNav></MobileNav>
              </div>
            </div>
        </div>
    );
};

export default Main;