import React from "react";
import { Arrow2icon, Arrow3icon, LogoIcon, Searchicon } from "./common/Icon";
import { Map } from "./common/Helper";
import Image from "next/image";
import HeaderBanner from "./common/HeaderBanner";

const GalleryPage = () => {
  return (
    <>
      {/* Banner */}
      <HeaderBanner heading="Gallery" />

      <div className=" font-poppines max-w-[1152px] w-full mx-auto px-4 py-12 lg:p-12 bg-white">
        <div className=" w-full grid grid-cols-1 mx-auto   sm:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-[50px]">
          <div className=" sm:pl-16 bg-red-950 items-center flex max-sm:justify-center   bg-transparent">
            <div className="">
              <LogoIcon />
            </div>
            <div className="mt-[22px] -ml-4">
              <h1 className="  text-[#FF9534] text-[30px] font-bold leading-normal ">
                Gallery
              </h1>
            </div>
          </div>
          {Map.map((items, index) => (
            <div
              key={index}
              className=" max-sm:flex justify-center w-full group relative"
            >
              <div className=" ">{items.img}</div>
              <div className=" z-50 absolute hidden group-hover:block translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ">
                <Searchicon />
              </div>
              <div className=" absolute top-0 hidden group-hover:block ">
                <Image
                  src="/img/shadow.png"
                  width={350}
                  height={250}
                  alt="shadow"
                />
              </div>
            </div>
          ))}
        </div>
        <div className=" max-w-[1152px] w-full flex justify-between max-sm:flex-col gap-y-10  mt-12 mx-auto">
          <div className=" max-sm:justify-center flex gap-x-5">
            <button className=" py-5 px-7 rounded-[5px] bg-[#FF9534] text-white text-[20px] font-normal leading-[21px] tracking-[-0.4px]">
              1
            </button>
            <button className=" py-5 px-7 border-[1px] border-[#FF9534] rounded-[5px] bg-white text-[#FF9534] text-[20px] font-normal leading-[21px] tracking-[-0.4px]">
              2
            </button>
            <button className=" py-5 px-7 border-[1px] rounded-[5px] border-[#FF9534]  bg-white text-[#FF9534] text-[20px] font-normal leading-[21px] tracking-[-0.4px]">
              3
            </button>
          </div>
          <div className=" rounded-[5px] py-5 max-sm:mx-auto max-w-[160px] w-full justify-between px-4 flex items-center bg-[#FF9534]">
            <button className=" flex items-center gap-2">
              <Arrow2icon />
              <p
                className=" text-white text-[14px]  font-medium leading-[21px]
        "
              >
                Prev
              </p>
            </button>
            <button className=" flex items-center gap-2">
              <p
                className=" text-white text-[14px]  font-medium leading-[21px]
        "
              >
                Next
              </p>
              <Arrow3icon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
