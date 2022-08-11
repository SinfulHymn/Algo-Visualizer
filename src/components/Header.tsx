import { NavLink } from "react-router-dom";
import { Navbar } from 'flowbite-react'

const Header = () => (
   <nav className="bg-slate-300">
    <div className=" container mx-auto p-4">
        <div className="flex justify-between items-center h-full">
            <div className="flex items-center content-center">
                <a href=""> 
                    {/* <img src="/images/logo.svg" alt="" className=" object-contain " /> */}
                    <span className="text-xl font-semibold">
                        AlgoVisualizer
                    </span>
                </a>
            </div>
            <div>nav items</div>
        </div>
    </div>

   </nav> 
);
export default Header;