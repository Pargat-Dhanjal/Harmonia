import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { HiOutlineMenu } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handelClick }) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-red-500"
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
      <div className="md:flex hidden flex-col py-10 px-4 bg-[#000000] w-60 h-full">
        <img src={logo} alt="logo" className="h-14 object-contain w-full" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3 z-30">
        {mobileSidebar ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileSidebar(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileSidebar(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-[#000000] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileSidebar ? 'left-0' : '-left-full'
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handelClick={() => setMobileSidebar(false)} />
      </div>
    </div>
  );
}

export default Sidebar;
