import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <nav className="max-w-[1200px] flex flex-row items-center justify-between bg-white  h-[80px] m-auto pr-4 pl-4">
      <div className="flex items-center">
        <Link href={"https://envoyvc.dev"}>
          <h1 className="ml-2 text-[20px] sm:text-[22px] font-medium text-gray-900 font-Rubik">
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
      <ConnectButton
        chainStatus="none"
        showBalance={false}
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
      />
    </nav>
  );
};

export default Navbar;
