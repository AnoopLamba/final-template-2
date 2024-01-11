import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { BtnArrowRightIcon } from "./common/Icon";

export default function Navbarswiper() {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            autoplay: false,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper1 max-w-[1082px] w-full mx-auto"
      >
        <SwiperSlide>
          <div className="max-w-[802px] w-full mx-auto max-lg:px-[100px] px-4 max-lg:text-[30px] flex justify-center h-[498px] flex-col max-sm:px-[30px]">
            <h1 className="text-white font-Poppins text-[41px] font-medium mx-auto leading-[70px] max-w-[812px] max-md:leading-[60px] w-full max-md:text-[36px] max-sm:text-[22px] max-sm:leading-[40px]">
              A wonderful{" "}
              <span className="text-[#FF9534] font-semibold">first</span> out of
              home learning <span className="text-[#FF9534] ">Experience</span>{" "}
              For you Child.
            </h1>
            <button
              type="submit"
              className="mt-[57px] max-sm:h-[50px] flex items-center justify-center rounded-[5px] gap-5 max-w-[186px] w-full h-[61px] bg-[#FF9534] border-[2px] border-[#FF9534] group hover:bg-transparent duration-300"
            >
              <span className="text-white font-Poppins text-[20px] font-normal">
                More Info
              </span>
              <BtnArrowRightIcon />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[802px] w-full mx-auto  max-lg:px-[100px] max-lg:text-[30px] px-4 flex justify-center h-[498px] flex-col max-xl:px-[10px] max-sm:px-[30px]">
            <h1 className="text-white font-Poppins text-[41px] mx-auto font-medium leading-[70px] max-w-[812px] max-md:leading-[60px] w-full max-md:text-[36px] max-sm:text-[22px] max-sm:leading-[40px]">
              A wonderful{" "}
              <span className="text-[#FF9534] font-semibold">first</span> out of
              home learning <span className="text-[#FF9534] ">Experience</span>{" "}
              For you Child.
            </h1>
            <button
              type="submit"
              className="mt-[57px] max-sm:h-[50px] flex items-center justify-center rounded-[5px] gap-5 max-w-[186px] w-full h-[61px] bg-[#FF9534] border-[2px] border-[#FF9534] group hover:bg-transparent duration-300 group"
            >
              <span className="text-white group-hover:text-[#FF9534] font-Poppins text-[20px] font-normal">
                More Info
              </span>
              <BtnArrowRightIcon />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
