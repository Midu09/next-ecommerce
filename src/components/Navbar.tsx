import Link from "next/link";
import React from "react";
import MenuPage from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/" className="text-2xl tracking-wide font-bold">
          NGANSHOP
        </Link>
        <MenuPage />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between h-full">
        {/* Left */}
        <div className="flex items-center gap-4 w-1/3 flex">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" height={40} width={40} />
          </Link>
          <Link href="/" className="text-2xl tracking-wide font-bold">
            NGANSHOP
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-8 w-2/3">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
