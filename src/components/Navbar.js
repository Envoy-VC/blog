import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const handleMenuToggle = () => {
    setToggleDrawer(!toggleDrawer);
  };
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

      <div className="relative sm:hidden">
        <button onClick={handleMenuToggle}>
          <Image
            src={menu}
            alt="menu"
            width={24}
            height={24}
            className="mx-4"
          />
        </button>
        {toggleDrawer && (
          <div className="absolute top-[54px] right-0 bg-white rounded-md w-[100vw] m-auto">
            <div className="block w-full px-4 py-2 text-sm text-gray-700 ml-[30vw]">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
