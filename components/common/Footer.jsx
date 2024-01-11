import Image from "next/image";
import {
  Btnicon,
  EmailIcon,
  FbIcon,
  InstaIcon,
  PhoneIcon,
  TWitterIcon,
  TgIcon,
  WtIcon,
} from "./Icon";
import Link from "next/link";

const Footer = () => {
  const latestYear = new Date().getFullYear();

  return (
    <div>
      <div className='bg-[url("/img/footer-bg.png")] bg-no-repeat bg-cover py-[75px] bg-center w-full px-3'>
        {/* Teaching-content */}
        <div className="max-w-[800px] w-full mx-auto pb-[60px]">
          <p className="text-[#FFF] text-center font-poppins text-[20px] sm:text-[25px] md:text-[30px] not-italic font-medium leading-7 sm:leading-8 md:leading-[50px]">
            Better <span className="text-[#FF9534]">education</span> for a
            better world
          </p>

          <p className="text-[#FFF]  text-center font-poppins text-[20px] sm:text-[25px] md:text-[28px] not-italic font-medium leading-7 sm:leading-8 md:leading-[50px]">
            An <span className="text-[#FF9534]">investment</span> in{" "}
            <span className="text-[#FF9534]">knowledge</span> pays the best{" "}
            <span className="text-[#FF9534]">interest</span>.
          </p>
        </div>

        {/* input */}
        <div className="max-w-[900px] w-full mx-auto rounded-[40px] border-[2px] h-[50px] md:h-[80px] pl-2 sm:pl-4  md:pl-5 border-white bg-[rgba(0,0,0,0.40)]">
          <form
            action=".php"
            className="flex gap-3 justify-between items-center"
          >
            {/* input */}
            <input
              type="email"
              placeholder="Enter e-mail to recieve news letter"
              className=" max-sm:pl-2 w-full bg-transparent text-white outline-none placeholder:text-[#fff] 
            placeholder:font-poppins placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[20px]
             not-italic font-light md:font-normal leading-10"
            />

            {/* btn */}
            <button className="rounded-[0px_40px_40px_0px] flex px-5 group duration-300 items-center hover:bg-[#fff] bg-[#FF9534] w-[60px] sm:w-[100px] h-[46px] md:h-[76px]">
              <Btnicon />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1050px]  md:pt-7 pb-7 sm:py-12 w-full mx-auto mt-[50px] max-sm:px-[12px] px-3">
        <div className=" mx-auto flex gap-[20px] gap-y-10 flex-wrap justify-center sm:justify-evenly md:justify-between">
          {/* logo */}
          <div>
            <div className=" max-sm:flex justify-center">
              <Image
                className="max-sm:w-[90px]"
                src="/img/Logo.png"
                width={120}
                height={60}
                alt="logo"
              />
            </div>

            <p className="text-black max-sm:text-center text-[20px] font-poppins font-normal leading-[160%] max-w-[264px] w-full pt-[19px]">
              Rapkhen is an outstanding Nursery & Primary school targeting
              educational System, helping Kids to read and write and to
              establish strong identity.
            </p>
          </div>

          {/* links */}
          <div className="flex flex-col gap-[20px] max-sm:text-center">
            <p className="text-[#FF9534] font-semibold leading-normal font-poppins text-[25px]">
              Links
            </p>

            <Link href="/">
              <p className="text-black hover:text-[#FF9534] hover:duration-300 font-normal leading-[21px] font-poppins text-[20px]">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="text-black hover:text-[#FF9534] hover:duration-300 font-normal leading-[21px] font-poppins text-[20px]">
                About us
              </p>
            </Link>

            <Link href="/management">
              <p className="text-black hover:text-[#FF9534] hover:duration-300 font-normal leading-[21px] font-poppins text-[20px]">
                Management
              </p>
            </Link>

            <Link href="/news">
              <p className="text-black hover:text-[#FF9534] hover:duration-300 font-normal leading-[21px] font-poppins text-[20px]">
                News & Event
              </p>
            </Link>

            <Link href="/gallery">
              <p className="text-black hover:text-[#FF9534] hover:duration-300 font-normal leading-[21px] font-poppins text-[20px]">
                Gallery
              </p>
            </Link>

            <Link href="/contact">
              <p className="text-black hover:text-[#FF9534] hover:duration-300 font-normal leading-[21px] font-poppins text-[20px]">
                Contact us
              </p>
            </Link>
          </div>

          {/* find-us */}
          <div className="flex flex-col gap-[20px] max-sm:text-center">
            <p className="text-[#FF9534] font-semibold leading-normal font-poppins text-[25px]">
              Find us
            </p>

            <p className="text-black font-normal leading-[33px] font-poppins text-[20px] max-w-[289px] w-full flex ">
              Lorem ipsum dolor siter amet, consectetur adipising elitsed do
              sum.
            </p>
            <Link href="">
              <p className="text-black hover:text-[#FF9534] hover:duration-300 font-normal leading-[33px] font-poppins text-[20px] flex items-center gap-1">
                <EmailIcon /> Loremipilum11@gmail.com
              </p>
            </Link>

            <div className="text-black hover:text-[#FF9534] max-sm:justify-center hover:duration-300 font-normal leading-[33px] font-poppins text-[20px] flex gap-1">
              <PhoneIcon />
              <div>
                <Link href="">
                  <p> +234 805 029 1265</p>
                </Link>

                <Link href="">
                  <p className="pt-2"> +234 907 228 0656</p>
                </Link>
              </div>
            </div>
          </div>

          {/* social----- */}
          <div className="flex flex-col gap-[20px]  ">
            <p className="text-[#FF9534]  font-semibold leading-normal font-poppins text-[25px]">
              Social Contact
            </p>
            <Link href="">
              <p className="text-black max-sm:justify-center hover:text-[#FF9534] hover:duration-300 font-normal leading-[21px] font-poppins text-[20px] flex items-center gap-[20px]">
                <FbIcon /> Facebook
              </p>
            </Link>

            <Link href="">
              <p className="text-black max-sm:justify-center font-normal hover:text-[#FF9534] hover:duration-300 leading-[21px] font-poppins text-[20px] flex items-center gap-[20px]">
                <TWitterIcon /> Twitter
              </p>
            </Link>
            <Link href="">
              <p className="text-black font-normal max-sm:justify-center hover:text-[#FF9534] hover:duration-300 leading-[21px] font-poppins text-[20px] flex items-center gap-[20px]">
                <InstaIcon /> Instagram
              </p>
            </Link>
            <Link href="">
              <p className="text-black font-normal max-sm:justify-center hover:text-[#FF9534] hover:duration-300 leading-[21px] font-poppins text-[20px] flex items-center gap-[20px]">
                <WtIcon /> Whatsapp
              </p>
            </Link>
            <Link href="">
              <p className="text-black font-normal max-sm:justify-center hover:text-[#FF9534] hover:duration-300 leading-[21px] font-poppins text-[20px] flex items-center gap-[20px]">
                <TgIcon /> Telegram
              </p>
            </Link>
          </div>
        </div>
        {/* copy--right */}
        <div>
          <p className="text-black font-poppins font-medium text-center mt-[57px]">
            Copyright © {latestYear}. All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
