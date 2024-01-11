import HeaderBanner from "./common/HeaderBanner";
import { LogoIcon, Mapicon, Messageicon, Phoneicon } from "./common/Icon";

const ContactUs = () => {
  return (
    <>
      {/* Banner */}
      <HeaderBanner heading="Contact Us" />

      <div className="pt-7 pb-[50px] max-xl:px-4">
        <div className=" bg-red-950 items-center max-w-[1048px] w-full mx-auto flex max-lg:justify-center   bg-transparent">
          <div className="">
            <LogoIcon />
          </div>
          <div className="mt-[22px] -ml-4">
            <h1 className="  text-[#FF9534] text-[30px] font-bold leading-normal ">
              Contact us
            </h1>
          </div>
        </div>
        <div className=" font-poppines mt-10 gap-8  max-w-[1048px] w-full mx-auto py-7 px-4 lg:p-7 flex max-lg:flex-col justify-between shadow-[0px_0px_10px_0px] shadow-[rgba(0,0,0,0.10)]">
          <div className="max-lg:mx-auto">
            <h1 className=" text-[24px] sm:text-[30px] text-black  uppercase font-bold leading-normal ">
              Contact Details
            </h1>
            <p className=" mt-7 max-w-[421px] w-full text-[rgba(0,0,0,0.80)] text-[12px] sm:text-[20px] font-normal leading-normal ">
              You can always reach us via following contact details. We will
              give our best to reach you as possible.
            </p>
            <div className=" mt-7 flex gap-x-5 max-sm:items-center">
              <Phoneicon />
              <p className=" text-[rgba(0,0,0,0.80)] text-[8px] sm:text-[20px] font-medium leading-[33px] ">
                +234 805 029 1265 , +234 907 228 0656
              </p>
            </div>
            <div className=" mt-12 flex max-sm:items-center gap-x-5">
              <Messageicon />
              <p className=" text-[rgba(0,0,0,0.80)] text-[10px] sm:text-[20px] font-medium leading-[33px] ">
                Info@gmail.com , Info@gmail.com
              </p>
            </div>
            <div className=" mt-12 flex gap-x-5">
              <Mapicon />
              <p className=" max-w-[391px] w-full text-[rgba(0,0,0,0.80)] text-[10px] sm:text-[20px] font-medium leading-[22px] ">
                4 law castle agbole aro opp. fidelity bank omida, Abeokuta, Ogun
                state.
              </p>
            </div>
          </div>
          <div className=" max-lg:mx-auto max-w-[481px] w-full px-7 pt-7 pb-5 bg-[#FF9534] rounded-[10px]   ">
            <div className="">
              <h1 className=" text-white text-[20px]  font-normal leading-[40px] ">
                Your Name{" "}
              </h1>
              <input
                placeholder="John doe"
                className="bg-white text-[rgba(0,0,0,0.50)] text-[14px] font-normal leading-[40px] pl-2 pr-[11px] outline-none rounded-[5px]  w-full py-3   "
                type="text"
              />
            </div>
            <div className=" mt-5">
              <h1 className=" text-white text-[20px]  font-normal leading-[40px] ">
                Your Mail{" "}
              </h1>
              <input
                placeholder="Info@gmail.com"
                className="bg-white text-[rgba(0,0,0,0.50)] text-[14px] font-normal leading-[40px] pl-2 pr-[11px] outline-none rounded-[5px]  w-full py-3   "
                type="text"
              />
            </div>
            <div className="mt-5">
              <h1 className=" text-white text-[16px] sm:text-[20px]  font-normal leading-[40px] ">
                Your Message
              </h1>
              <input
                placeholder="Type your message here..."
                className="bg-white text-[rgba(0,0,0,0.50)] text-[12px] sm:text-[14px] font-normal leading-[40px] pl-2 pr-[11px] outline-none rounded-[5px]  w-full pt-3 pb-7   "
                type="text"
              />
            </div>
            <div className=" text-end">
              <button className=" text-white text-[20px] font-medium leading-[21px] tracking-[-0.4px] mt-5  py-5 px-7 border-[2px] border-white rounded-[5px] hover:bg-white hover:text-[#FF9534] transition-all duration-150 ease-in-out">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
