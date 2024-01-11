import Image from "next/image";
import Navbarswiper from "./Navbarswiper";
import { latestblog } from "./common/Helper";
import { BtnArrowRightIcon, LogoIcon, Searchicon } from "./common/Icon";
import Teamswiper from "./Teamswiper";

const HomePage = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col ">
        <div className="bg-[url(/img/boybg.png)] bg-no-repeat bg-cover bg-center h-[498px] max-xl:px-4 relative">
          <Navbarswiper />
        </div>
      </div>
      <div className="bg-[#F2F2F2]">
        <div className="max-w-[1052px] pt-[42px] w-full mx-auto max-xl:px-4">
          <div className="relative max-w-[210px] w-full mx-auto">
            <div className="absolute left-[-3px] sm:left-[-35px] sm:top-[-10px]">
              <LogoIcon />
            </div>
            <h1 className="text-[#FF9534] max-sm:text-center z-50 relative font-Poppins font-semibold text-[30px]">
              Our Activities
            </h1>
          </div>
          <div className="flex max-lg:flex-col pb-[45px] gap-[70px] max-xl:gap-[40px] max-lg:gap-[20px] mt-[50px]">
            {/* Art & Creativity */}
            <div className="flex max-sm:flex-col mx-auto gap-5">
              <Image
                src="/img/art.png"
                width={188}
                height={258}
                className="mx-auto max-sm:w-[250px] max-sm:h-[240px] object-center"
                alt="art"
              />
              <div className="max-w-[283px] w-full max-sm:text-center">
                <h1 className="text-[#22343D] font-Poppins text-[25px] font-semibold">
                  Art & Creativity
                </h1>
                <p className="text-[#22343D] font-Poppins text-[17px] max-sm:text-[15px] font-normal pt-[10px]">
                  Art is the expression or application of human creative skill
                  and imagination, typically in a visual form such as painting
                  or sculpture, producing works to be appreciated primarily for
                  their beauty or emotional power.
                </p>
              </div>
            </div>

            {/* Sport & Entertainment */}
            <div className="flex max-sm:flex-col mx-auto gap-5">
              <Image
                src="/img/sports.png"
                width={188}
                height={258}
                className="mx-auto max-sm:w-[200px] max-sm:h-[240px] object-center"
                alt="sports"
              />
              <div className="max-w-[283px] w-full max-sm:text-center">
                <h1 className="text-[#22343D] font-Poppins text-[25px] font-semibold">
                  Sport & Entertainment
                </h1>
                <p className="text-[#22343D] font-Poppins text-[17px] max-sm:text-[15px] font-normal pt-[10px]">
                  Art is the expression or application of human creative skill
                  and imagination, typically in a visual form such as painting
                  or sculpture, producing works to be appreciated primarily for
                  their beauty or emotional power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[124px] max-sm:mt-[50px] max-w-[1040px] w-full mx-auto max-xl:px-4">
        <div className="flex gap-[73px] max-xl:gap-[40px] max-lg:flex-col items-center">
          <div className="relative max-w-[168px] w-full mx-auto">
            <div className="absolute left-[-10px] top-[0px] sm:left-[-35px] sm:top-[-18px]">
              <LogoIcon />
            </div>
            <h1 className="text-[#FF9534] max-sm:text-center z-50 relative font-Poppins font-semibold text-[30px]">
              Latest Blog
            </h1>
          </div>
          <div className="flex max-md:flex-col max-lg:gap-[30px] gap-[50px]">
            {latestblog.map((item, index) => (
              <div
                key={index}
                className="max-w-[344px] w-full rounded-[10px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.20)]"
              >
                <Image
                  src={item.img}
                  width={344}
                  height={250}
                  className=""
                  alt="img"
                />
                <div className="p-[15px_30px_10px_30px] max-sm:p-[15px]">
                  <p className="text-[20px] max-sm:text-[16px] font-Poppins font-normal">
                    {item.lorem}
                  </p>
                  <div className="gap-[26px] max-sm:mt-[10px] flex items-center">
                    <p className="text-[20px] max-sm:text-[16px] font-Poppins font-medium">
                      {item.quality}
                    </p>
                    <div className="flex gap-[15px]">
                      <div className="flex gap-[13px] items-center">
                        {item.comenticon}
                        <p className="text-[20px] max-sm:text-[16px] font-Poppins font-medium">
                          {item.coment}
                        </p>
                      </div>
                      <div className="flex gap-[10px]">
                        {item.viewicon}
                        <p className="text-[20px] max-sm:text-[16px] font-Poppins font-medium">
                          {item.view}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[19px] font-Poppins font-normal">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex max-lg:justify-center justify-end my-[50px]">
          <button
            type="submit"
            className="flex  items-center max-sm:h-[40px] max-sm:max-w-[160px] justify-center rounded-[5px] gap-5 max-w-[220px] w-full h-[61px] bg-[#FF9534] border-[2px] border-[#FF9534] group hover:bg-transparent duration-300"
          >
            <span className="text-white max-sm:text-[16px] group-hover:text-[#FF9534] font-Poppins text-[20px] font-normal">
              More Articles
            </span>
            <BtnArrowRightIcon />
          </button>
        </div>
      </div>
      <div className="bg-[#F2F2F2] pt-[42px] pb-[50px]">
        <div className="max-w-[1152px] w-full mx-auto">
          <Teamswiper />
        </div>
      </div>
      <div className="max-w-[1000px] w-full mx-auto max-xl:px-4">
        <div className=" flex items-center mt-[84px] max-sm:mt-[50px] gap-[102px] max-lg:gap-[50px] max-md:flex-col">
          <div className="relative max-w-[168px] w-full mx-auto">
            <div className="absolute left-[-12px] top-[0px] sm:left-[-30px] sm:top-[-18px]">
              <LogoIcon />
            </div>
            <h1 className="text-[#FF9534] max-sm:text-center z-50 relative font-Poppins font-semibold text-[30px]">
              Our Gallery
            </h1>
          </div>
          <div className="flex gap-7 sm:gap-[52px]">
            {/* our gallery image 1 */}
            <div className="w-full group relative">
              <Image
                src="/img/gallaryfirst.png"
                width={320}
                height={300}
                alt=""
              />
              <div className=" z-50 absolute hidden group-hover:block translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ">
                <Searchicon />
              </div>
              <div className="w-full h-full bg-black bg-opacity-60 absolute top-0 hidden group-hover:block "></div>
            </div>

            {/* our gallery image 2 */}
            <div className="w-full group relative">
              <Image src="/img/gallary2.png" width={320} height={300} alt="" />
              <div className=" z-50 absolute hidden group-hover:block translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ">
                <Searchicon />
              </div>
              <div className="w-full h-full bg-black bg-opacity-60 absolute top-0 hidden group-hover:block "></div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="my-[57px] flex max-sm:h-[40px] max-sm:max-w-[160px] items-center justify-center rounded-[5px] gap-5 max-w-[220px] w-full h-[61px] bg-[#FF9534] border-[2px] border-[#FF9534] group hover:bg-transparent duration-300"
          >
            <span className="text-white max-sm:text-[16px] group-hover:text-[#FF9534] font-Poppins text-[20px] font-normal">
              More Articles
            </span>
            <BtnArrowRightIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
