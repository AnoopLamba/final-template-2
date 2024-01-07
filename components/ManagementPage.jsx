import Image from "next/image";
import Link from "next/link";
import { FrIcon, IrIcon, TrIcon, WrIcon } from "./common/Icon";
import { Data } from "./common/Helper";

const ManagementPage = () => {
  return (
    <>
      {/* main */}
      <div>
        <div className="max-w-[1152px] w-full mx-auto px-[12px]">
          <div className="max-w-[1050px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <Image
                className="lg:w-[500px] lg:h-[500px]"
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
              <div className="flex gap-[25px]">
                <Link href="">
                  <FrIcon />{" "}
                </Link>
                <Link href="">
                  <WrIcon />
                </Link>
                <Link href="">
                  <IrIcon />
                </Link>
                <Link href="">
                  <TrIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="bg-[#F2F2F2]">
        <div className="pt-[41px] flex justify-center max-w-[285px] w-full mx-auto relative px-[12px]">
          <Image
            className="absolute left-[-4%] top-[37%]"
            src="/img/Pattern.png"
            width={50}
            height={50}
            alt="pattern"
          />
          <p className="text-[#FF9534] text-[30px] z-50 font-poppins  leading-normal font-semibold text-center  ">
            Meet Our Team
          </p>
        </div>
        <div className="mx-auto flex flex-wrap justify-center gap-[90px] px-[12px] mt-[117px]">
          {Data.map((item, index) => (
            <div
              key={index}
              className="max-w-[264px] w-full h-[199px] rounded-[10px]  bg-white shadow-[0px_-1px_10px_2px_rgba(0,0,0,0.10);] relative"
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
                  className="flex gap-[20px] mt-[18px] justify-center mx-auto "
                >
                  <div className="hover:cursor-pointer hover:scale-110">
                    <Link href="">{listt.facebook}</Link>
                  </div>
                  <div className="hover:cursor-pointer hover:scale-110">
                    <Link href="">{listt.whatsapp}</Link>
                  </div>
                  <div className="hover:cursor-pointer hover:scale-110">
                    <Link href="">{listt.insta}</Link>
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
