import { useState } from "react";
import Button from "../props/Button";
import { Menu } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-green-100 w-full fixed top-0 left-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
          <div className="flex items-center space-x-3">
            <img src="src/assets/google.webp" alt="logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-[#5EABD6]">CService</span>
          </div>

          <ul className="hidden md:flex space-x-8 font-semibold">
            <li className="hover:text-[#5EABD6] cursor-pointer transition-colors duration-800">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#5EABD6] cursor-pointer transition-colors duration-800">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-[#5EABD6] cursor-pointer transition-colors duration-800">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#5EABD6] cursor-pointer transition-colors duration-800">
              <a href="#integrations">Integrations</a>
            </li>
            <li className="hover:text-[#5EABD6] cursor-pointer transition-colors duration-800">
              <a href="#riview">Riview</a>
            </li>
            <li className="hover:text-[#5EABD6] cursor-pointer transition-colors duration-800">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="hidden md:block">
            <Button className="text-white">Login</Button>
          </div>

          <div className="md:hidden">
            <Menu
              size={28}
              color="black"
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            />
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-5 pb-4 flex flex-col space-y-3 font-semibold bg-green-200">
            <a
              className="hover:text-[#5EABD6] transition-colors duration-800"
              href="#"
            >
              Home
            </a>
            <a
              className="hover:text-[#5EABD6] transition-colors duration-800"
              href="#services"
            >
              Services
            </a>
            <a
              className="hover:text-[#5EABD6] transition-colors duration-800"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:text-[#5EABD6] transition-colors duration-800"
              href="#integrations"
            >
              Integrations
            </a>
            <a
              className="hover:text-[#5EABD6] transition-colors duration-800"
              href="#riview"
            >
              Riview
            </a>
            <a
              className="hover:text-[#5EABD6] transition-colors duration-800"
              href="#contact"
            >
              Contact
            </a>
            <Button className="text-white">Login</Button>
          </div>
        )}
      </nav>

      <div className="h-[74px] md:h-[80px]" />
    </>
  );
}

export default Navbar;
