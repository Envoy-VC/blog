import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <nav className="max-w-[1200px] flex flex-row items-center justify-between bg-white h-[80px] m-auto">
      <div className="flex items-center">
        <Link href={"https://envoyvc.dev"}>
          <h1 className="ml-2 text-[20px] sm:text-[22px] font-medium text-gray-900 hover:text-gray-500  font-Rubik">
            Vedant Chainani
          </h1>
        </Link>
        <Link href={"https://blog.envoyvc.dev"}>
          <h1 className="ml-2 text-[20px] sm:text-[22px] font-medium text-[#254CDD] hover:text-[#6e727e] font-Rubik">
            {" "}
            | Blog
          </h1>
        </Link>
      </div>
      {/* Small Screen Navigation */}
      <div className="sm:hidden flex items-center flex-row">
        <Image
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer ml-auto order-2 mr-4"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        <div
          className={`relative top-[100px] right-0 left-0 bg-white z-10 shadow-secondary py-4 ${
            !toggleDrawer
              ? "-translate-y-[100vh] -translate-x-[75%]"
              : "translate-y-0 -translate-x-[75%]"
          } transition-all duration-500`}
        >
          <div className="flex mx-4 justify-center">
            <ConnectButton
              chainStatus="none"
              showBalance={false}
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
            />
          </div>
        </div>
      </div>
      <div className="sm:flex hidden">
        <ConnectButton
          chainStatus="none"
          showBalance={false}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
