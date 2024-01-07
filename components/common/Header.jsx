import Image from "next/image";
import Link from "next/link";
import { Arrowicon, Darkbtnicon, Sidebaricon } from "./Icon";

function Header() {
  return (
    <>
      <nav className="max-w-[1064px] w-full mx-auto px-3  pb-[10px]">
        <div className="flex justify-between items-center pt-[27px] pb-[10px]">
          {/* logo */}

          <div>
            <Link href="">
              {" "}
              <Image
                className="max-sm:w-[90px]"
                src="/img/Logo.png"
                width={120}
                height={60}
                alt="logo"
              />
            </Link>
          </div>

          {/* links */}

          <ul className="flex gap-10 max-lg:hidden ">
            <Link href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300">
                Home
              </li>
            </Link>
            <Link href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300">
                About us
              </li>
            </Link>
            <Link href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300">
                Management
              </li>
            </Link>
            <Link href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300">
                News & Event
              </li>
            </Link>
            <Link href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300">
                Gallery
              </li>
            </Link>
            <Link href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF9534] duration-300">
                Contact us
              </li>
            </Link>
          </ul>

          <div className="flex items-center gap-5 sm:gap-10">
            <button>
              <Darkbtnicon />
            </button>

            <button className="lg:hidden">
              <Sidebaricon />
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-[#FF9534] w-full mx-auto py-[33px] px-3">
        <div className="max-w-[1052px] w-full mx-auto flex justify-between items-center">
          <p className="text-white font-Roboto text-2xl sm:text-[33px] font-medium ">
            About us
          </p>

          <div className="w-[133px] flex items-center justify-between">
            <p className="text-[rgba(255,255,255,0.60)] font-Roboto text-[16px] font-normal">
              Home
            </p>
            <div className="pt-1">
              <Arrowicon />
            </div>
            <p className="text-white font-Roboto text-[16px] font-medium">
              About us
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
