import Image from "next/image";
import Link from "next/link";
import { FrIcon, IrIcon, LogoIcon, TrIcon, WrIcon } from "./common/Icon";
import { Data } from "./common/Helper";
import HeaderBanner from "./common/HeaderBanner";

const ManagementPage = () => {
  return (
    <>
      {/* Banner */}
      <HeaderBanner heading="Management" />
      {/* main */}
      <div>
        <div className="max-w-[1152px] w-full mx-auto px-[12px]">
          <div className="max-w-[1050px] w-full mx-auto flex flex-col lg:flex-row items-center pt-7 pb-12 justify-between gap-5">
            <div>
              <Image
                className="max-sm:w-[340px] max-sm:h-[300px]"
                src="/img/Vector1.png"
                width={500}
                height={500}
                alt="vector"
              />
            </div>
            <div>
              <p className="text-[30px] text-[#FF9534] font-poppins font-semibold leading-normal text-transparent-[uppercase]">
                The Founder
              </p>
              <p className="text-[20px] text-black font-poppins font-medium leading-[35px]">
                Ms. LOREM IPSUM
              </p>
              <p className="text-[20px] text-black font-poppins font-normal leading-[35px] max-w-[501px] w-full">
                Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                eiusmod temp incit ut labore dolore magna aliqua. computer
                science students Ut enim ad minim veniam. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod temp
                incididunt ut labore dol magna aliqua. olabisi oanbanjo
                unuversity Ut enim ad minim Lorem ipsum eiusmod temp incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem
                ipsum dolor sit amet.
              </p>
              <div className="flex gap-[25px] mt-8">
                <Link
                  href=""
                  className="hover:scale-110 transition-all duration-200 ease-in-out"
                >
                  <FrIcon />{" "}
                </Link>
                <Link
                  href=""
                  className="hover:scale-110 transition-all duration-200 ease-in-out"
                >
                  <WrIcon />
                </Link>
                <Link
                  href=""
                  className="hover:scale-110 transition-all duration-200 ease-in-out"
                >
                  <IrIcon />
                </Link>
                <Link
                  href=""
                  className="hover:scale-110 transition-all duration-200 ease-in-out"
                >
                  <TrIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="bg-[#F2F2F2] pb-8 md:pb-20">
        <div className="pt-10 flex justify-center max-w-[285px] w-full mx-auto relative px-[12px]">
          <div className="absolute left-[3%] top-[40%] sm:left-[-4%] sm:top-[25%]">
            <LogoIcon />
          </div>
          <p className="text-[#FF9534] text-[30px] z-50 font-poppins  leading-normal font-semibold text-center">
            Meet Our Team
          </p>
        </div>
        <div className="mx-auto flex flex-wrap justify-center gap-x-[30px] gap-y-[90px] sm:gap-[90px] px-[12px] mt-[117px]">
          {Data.map((item, index) => (
            <div
              key={index}
              className="max-w-[264px] w-full pb-4 rounded-[10px]  bg-white shadow-[0px_-1px_10px_2px_rgba(0,0,0,0.10);] relative"
            >
              <Image
                className="absolute top-[-30%] left-[27%] mx-auto"
                src={item.img}
                width={120}
                height={120}
                alt="img"
              />
              <p className="text-[#22343D] font-poppins font-semibold text-[22px]  leading-normal text-center mt-[77px]">
                {item.name}
              </p>
              <p className="text-[#FF725E] font-poppins font-semibold text-[16px]  leading-[26px] text-center">
                {item.bio}
              </p>
              {item.logo.map((listt, listindex) => (
                <div
                  key={listindex}
                  className="flex gap-[20px] mt-8  justify-center mx-auto "
                >
                  <Link
                    href=""
                    className="hover:scale-110 transition-all duration-200 ease-in-out"
                  >
                    <div className="hover:cursor-pointer  hover:scale-110">
                      {listt.facebook}
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="hover:scale-110 transition-all duration-200 ease-in-out"
                  >
                    <div className=" hover:scale-110">{listt.whatsapp}</div>
                  </Link>
                  <div className="hover:cursor-pointer hover:scale-110">
                    <Link
                      href=""
                      className="hover:scale-110 transition-all duration-200 ease-in-out"
                    >
                      {listt.insta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManagementPage;
