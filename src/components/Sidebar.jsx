import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = () => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        activeClassName="text-[#1db954]"
        onClick={() => handelClick && handelClick()}
      >
        <link.icon className="w-6 h-6 mr-2 " />
        {link.name}
      </NavLink>
    ))}
  </div>
);

function Sidebar() {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <div>
      <div className="md:flex hidden flex-col py-10 px-4 bg-[#191624] w-[240px] h-full">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileSidebar ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={()=> setMobileSidebar(false)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={()=> setMobileSidebar(true)} />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl form-white/10 to-[#222222] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileSidebar ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handelClick={()=> setMobileSidebar(false)} />
      </div>
    </div>
  );
}

export default Sidebar;
