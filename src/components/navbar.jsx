import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navigationLinks } from "../util/constants";
import { style } from "../util/style";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");
  console.log(active);

  return (
    <div className={`${style.flexBetween} w-full py-6`}>
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[130px] h-[35px] cursor-pointer"
      />

      {/* Navigation link */}
      <ul
        className={`sm:flex hidden justify-end items-center flex-1 list-none`}
      >
        {navigationLinks &&
          navigationLinks.map((item, index) => (
            <li
              key={item.id}
              className={`text-white cursor-pointer font-montserrat font-normal text-[16px]
                ${index === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
                ${active === item.id ? "text-blue-400" : "text-lightWhite"}
                hover:text-lightWhite transition-all duration-300`}
              onClick={() => setActive(item.id)}
            >
              {item.title}
            </li>
          ))}
      </ul>

      {/* Navigation btn */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggleNav ? close : menu}
          alt="menu"
          className={`w-[30px] h-[30px] object-center`}
          onClick={() => setToggleNav(!toggleNav)}
        />

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}
        >
          <ul className={`flex justify-center items-center flex-1`}>
            {navigationLinks &&
              navigationLinks.map((item, index) => (
                <li
                  key={item.id}
                  className={`text-white cursor-pointer font-montserrat font-normal text-[12px]
                  ${index === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
                  ${active === item.id ? "text-blue-400" : "text-lightWhite"}
                   hover:text-lightWhite transition-all duration-300`}
                  onClick={() => setActive(item.id)}
                >
                  {item.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
