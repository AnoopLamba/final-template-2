import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  FbIcon,
  FrIcon,
  InstaIcon,
  IrIcon,
  LogoIcon,
  WrIcon,
} from "./common/Icon";
import { team } from "./common/Helper";

export default function Teamswiper() {
  return (
    <>
      <div className="">
        <div className="relative max-w-[250px] w-full mx-auto">
          <div className="absolute left-0 sm:left-[-33px] top-[0px] sm:top-[-18px]">
            <LogoIcon />
          </div>
          <h1 className="text-[#FF9534] max-sm:text-center z-50 relative font-Poppins font-semibold text-[30px]">
            Meet Our Team
          </h1>
        </div>
      </div>
      <div className="relative max-w-[250px] min-[500px]:max-w-[465px] md:max-w-[565px] lg:max-w-[872px] w-full mx-auto">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            640: {
              autoplay: false,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              autoplay: false,
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              autoplay: false,
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={{
            nextEl: ".swiper2-next-btn",
            prevEl: ".swiper2-prev-btn",
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper2 w-full h-[280px] mx-auto mt-[60px]"
        >
          {team.map((item, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[264px] max-h-[215px] w-full bg-white p-[18px_20px] rounded-[10px] shadow-[0px_-1px_10px_2px_rgba(0,0,0,0.10)] relative"
            >
              <Image
                src={item.img}
                width={120}
                height={120}
                alt="img"
                className="absolute left-[27%] top-[-30%]"
              />
              <p className="text-[#22343D] font-Poppins text-center max-sm:line-clamp-1 text-base md:text-lg lg:text-[22px] font-semibold pt-[77px]">
                {item.name}
              </p>
              <p className="text-[#FF725E] text-center font-Poppins text-[16px] font-normal pt-1">
                {item.quality}
              </p>
              <div className="flex gap-5 mt-[18px] mx-auto justify-center">
                <FrIcon />
                <WrIcon />
                <IrIcon />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigatin Buttons */}
        <div className="swiper2-prev-btn max-sm:hidden absolute top-[50%] translate-y-[-50%] left-[-70px] z-10 cursor-pointer">
          <Image
            src="/img/secondswiperleft.png"
            width={50}
            height={50}
            alt="prev button"
          />
        </div>
        <div className="swiper2-next-btn max-sm:hidden absolute top-[50%] translate-y-[-50%] right-[-70px] z-10 cursor-pointer">
          <Image
            src="/img/secondright.png"
            width={50}
            height={50}
            alt="prev button"
          />
        </div>
      </div>
    </>
  );
}
