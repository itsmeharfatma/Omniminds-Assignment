import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <header className="px-7 py-5 sm:px-24 sm:pb-3 sm:pt-6 absolute z-10 w-full fontStyle bg-white">
      <nav className="flex justify-start items-center gap-16 max-container">
        <a href="/">
          <h1 className="font-bold text-2xl text-gray-900">Skill Showcase</h1>
        </a>

        <ul
          className={`lg:flex lg:flex-1 lg:justify-start lg:space-x-10 lg:items-center lg:py-0 py-8 absolute lg:static lg:px-0 px-4  ${
            open
              ? "top-24 left-5 space-y-4 bg-white w-[88%] h-72 shadow-xl"
              : "top-[-490px]"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal font-medium text-gray-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger-Menu-Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-[30px] cursor-pointer lg:hidden w-6 h-6"
        >
          {open ? (
            <i class="fa-solid fa-xmark fa-xl"></i>
          ) : (
            <i class="fa-solid fa-bars fa-xl"></i>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
