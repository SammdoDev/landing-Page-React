import { useState } from "react";
import Button from "../props/Button";
import { UilBars } from "@iconscout/react-unicons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`bg-green-200 flex w-full flex-col md:flex-row items-start md:items-center justify-around px-5 py-2 font-navbar ease-in-out md:relative fixed ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <div className="flex items-center justify-center flex-row space-x-4">
          <img src="src\assets\google.webp" width={30} />
          <span className="text-lg font-bold text-[#5EABD6]">CService</span>
        </div>

        <ul className=" flex flex-col md:flex-row space-x-0 md:space-x-8 my-4 md:space-y-0 font-bold space-y-4 justify-between items-start md:items-center">
          <li>FAQ</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>

        <Button>See All</Button>
      </nav>

      <div className="flex justify-end">
        <UilBars
          size="32"
          color="black"
          className="md:hidden m-4 fixed z-100"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </>
  );
}

export default Navbar;
