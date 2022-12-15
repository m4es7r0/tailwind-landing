import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar w-full flex py-6 justify-between items-center">
      <a href="/">
        <img src={logo} alt="hoobank" className="w-32 h-8" />
      </a>

      <ul className="list-none sm:flex flex-1 hidden justify-end items-center">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="font-poppins font-normal text-dimWhite hover:text-white transition-all mr-10 last:mr-0"
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-[5]">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7 object-contain cursor-pointer"
          onClick={(e) => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-fit rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-1 flex-col justify-end items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="font-poppins font-normal text-white mb-4 last:mb-0"
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
