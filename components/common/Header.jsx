import Image from "next/image";
import Link from "next/link";
import { Arrowicon, Darkbtnicon, Sidebaricon } from "./Icon";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* sidebar */}
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* main navigation */}
      <nav className="max-w-[1064px] w-full mx-auto px-3">
        <div className="flex justify-between items-center pt-6 pb-[10px]">
          {/* logo */}
          <Link href="/">
            <Image
              className="max-sm:w-[90px]"
              src="/img/Logo.png"
              width={120}
              height={60}
              alt="logo"
            />
          </Link>

          {/* links */}
          <div className="flex gap-10 max-lg:hidden ">
            <Link
              href="/"
              className={`font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300
              ${router.pathname === "/" ? "text-[#FF9534]" : "text-black"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300 ${
                router.pathname === "/about" ? "text-[#FF9534]" : "text-black"
              } `}
            >
              About us
            </Link>
            <Link
              href="/management"
              className={`font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300 ${
                router.pathname === "/management"
                  ? "text-[#FF9534]"
                  : "text-black"
              }`}
            >
              Management
            </Link>
            <Link
              href="/news"
              className={`font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300 
              ${router.pathname === "/news" ? "text-[#FF9534]" : "text-black"}`}
            >
              News & Event
            </Link>
            <Link
              href="/gallery"
              className={`font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300 ${
                router.pathname === "/gallery" ? "text-[#FF9534]" : "text-black"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300 ${
                router.pathname === "/contact" ? "text-[#FF9534]" : "text-black"
              }`}
            >
              Contact us
            </Link>
          </div>

          <div className="flex items-center gap-5 sm:gap-10">
            <button>
              <Darkbtnicon />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden hover:scale-105 transition-all duration-150 ease-in-out"
            >
              <Sidebaricon />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
