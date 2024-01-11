import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cards } from "./common/Helper";
import {
  AdminIcons,
  BtnArrowRightIcon,
  EyeIcons,
  MessageIcons,
  TimeIcons,
} from "./common/Icon";

const NewsAndEventPage = () => {
  return (
    <>
      <div className="max-w-[1152px] w-full sm:mt-[50px] p-4 sm:px-[50px] ">
        <div className="max-w-[1052px] w-full ">
          <div className="w-full  relative ">
            <Image
              src="/img/Grouppic.png"
              width={1052}
              height={600}
              alt="group photo"
            />
            <div className="max-w-[652px] w-full absolute bottom-0 sm:p-[15px_41px_15px_10px] p-2 bg-[rgba(0,0,0,0.50)]">
              <p className="max-w-[601px] w-full font-poppins md:text-[30px] sm:text-[24px] text-[13px] sm:font-bold font-medium uppercase text-white ">
                The School end of The session party
              </p>
            </div>
          </div>
          <p className="uppercase mt-5 text-[16px] font-bold mt- font-poppins leading-normal text-[#FF9534]">
            Top Event
          </p>
          <div className="max-w-[622px] w-full mt-[10px] flex justify-between gap-5 flex-wrap items-center">
            <div className="max-w-[103px] w-full flex items-center justify-between ">
              <div className="max-w-[25px] w-full">
                <AdminIcons />
              </div>
              <p className=" max-w-[68px] w-full  text-[20px] font-semibold leading-[32px] font-poppins  ">
                Admin
              </p>
            </div>
            <div className="max-w-[229px] w-full flex justify-between items-center ">
              <p className="max-w-[30px] w-full">
                <TimeIcons />
              </p>
              <p className=" max-w-[194px] w-full  text-[20px] font-semibold leading-[32px] font-poppins">
                September 10, 2021
              </p>
            </div>
            <div className="max-w-[190px] w-full flex justify-between items-center ">
              <p className="max-w-[25px] w-full">
                <MessageIcons />
              </p>
              <p className=" max-w-[150px] w-full  text-[20px] font-semibold leading-[32px] font-poppins  ">
                No Comment
              </p>
            </div>
          </div>
          <div className="w-full text-[20px font-poppins font-normal mt-[20px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod
            temp incit ut labore dolore magnaaliqua. computer science students
            Ut enim ad minimveniam. Lorem ipsum.
          </div>
          <button className=" max-w-[203px] w-full sm:px-5 sm:py-7 px-2 py-4  hover:scale-105 mt-5 flex bg-[#FF9534] items-center rounded-[5px]  justify-between">
            <p className="max-w-[107px] w-ful font-poppins text-[20px] font-normal leading-[21px] tracking-[-0.4px] text-white ">
              Read more
            </p>
            <span>
              <BtnArrowRightIcon />
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-[1152px] w-full mx-auto  bg-[#F2F2F2] sm:px-[30px] p-4 sm:py-[50px] ">
        <div className="  w-full  flex justify-between flex-wrap  pt-[50px] gap-y-[40px] gap-x-2 ">
          <div className="max-w-[344px] w-full mx-auto  flex items-center ">
            <div className="max-w-[286px] w-full relative   mx-auto  text-[#FF9534] text-[30px] leading-normal font-semibold">
              <p className="z-50 relative"> TOP NEWS & EVENT</p>
              <Image
                className="absolute top-[-11px] left-[-34px]"
                src="/img/circle.png"
                width={47}
                height={50}
                alt="circle"
              />
            </div>
          </div>
          {Cards.map((items, index) => (
            <div
              key={index}
              className="max-w-[344px] w-full rounded-[10px] mx-auto shadow-[0px_0px_20px_2px]   shadow-[rgba(0,0,0,0.20)] pb-[20px] "
            >
              <Image src={items.img} width={344} height={232} alt="img" />
              <div className=" px-4 pt-8">
                <p className="max-w-[282px] w-full text-[20px]  text-[#000] font-normal  leading-[32px] mx-auto  font-poppins ">
                  {items.name}
                </p>
                <div className=" max-w-[284px] w-full mx-auto max-sm:px-1  mt-[10px] flex justify-between items-center  ">
                  <p className="max-w-[127px] w-full text-[20px] font-medium leading-[32px font-poppins  ">
                    {items.master}
                  </p>
                  <Link
                    href=""
                    className="max-w-[60px] w-full flex justify-between items-center "
                  >
                    <MessageIcons />
                    <h4 className=" text-black text-[20px] font-poppins font-medium leading-normal">
                      10
                    </h4>
                  </Link>
                  <Link
                    href=""
                    className="max-w-[60px] w-full flex justify-between items-center "
                  >
                    <EyeIcons />
                    <h4 className=" text-black text-[20px] font-poppins font-medium leading-normal">
                      29
                    </h4>
                  </Link>
                </div>
                <p className="max-w-[284px] w-full mx-auto max-sm:px-1 mx-aut font-poppins text-[19px] font-normal  leading-[32px] mt-5 ">
                  September 10, 2021
                </p>
              </div>
            </div>
          ))}
          <div className="w-full  sm:flex justify-between  mt-[50px] items-center">
            <div className="max-w-[256px] w-full flex justify-between max-sm:mx-auto">
              <button className="max-w-[67px] w-full sm:p-[20px_30px] px-2 py-2 hover:text-white border border-[#FF9534] rounded-[5px] text-[20px] text-[#FF9534] font-normal leading-[21px] hover:bg-[#FF9534]">
                1
              </button>
              <button className="max-w-[72px] w-full  sm:p-[20px_30px] px-2 py-2 hover:text-white border border-[#FF9534] rounded-[5px] text-[20px] text-[#FF9534] font-normal leading-[21px] hover:bg-[#FF9534]">
                2
              </button>
              <button className="max-w-[72px] w-full  sm:p-[20px_30px] px-2 py-3 hover:text-white border border-[#FF9534] rounded-[5px] text-[20px] text-[#FF9534] font-normal leading-[21px] hover:bg-[#FF9534]">
                3
              </button>
            </div>
            <button className=" max-w-[160px] w-full sm:px-4 sm:py-5 px-2 py-3 max-sm:mx-auto max-sm:mt-5 flex bg-[#FF9534] items-center rounded-[5px]  justify-between">
              <Link
                href=""
                className="max-w-[50px] w-full flex  justify-between items-center hover:scale-105 "
              >
                <span>
                  <svg
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.561203 3.53713C0.270231 3.77712 0.270231 4.22288 0.561203 4.46287L4.26823 7.52038C4.65957 7.84315 5.25 7.56479 5.25 7.0575L5.25 0.942497C5.25 0.435216 4.65957 0.156849 4.26823 0.479624L0.561203 3.53713Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="max-w-[33px] w-ful font-poppins text-[14px] font-normal leading-[21px] tracking-[-0.4px] text-white ">
                  Prev
                </span>
              </Link>
              <Link
                href=""
                className="max-w-[50px] w-full flex hover:scale-105  justify-between items-center "
              >
                <span className="max-w-[33px] w-ful font-poppins text-[14px] font-normal leading-[21px] tracking-[-0.4px] text-white ">
                  Next
                </span>
                <span>
                  <svg
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.4388 4.46287C5.72977 4.22288 5.72977 3.77712 5.4388 3.53713L1.73177 0.479624C1.34043 0.156848 0.75 0.435215 0.75 0.942496V7.0575C0.75 7.56478 1.34043 7.84315 1.73177 7.52038L5.4388 4.46287Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndEventPage;
