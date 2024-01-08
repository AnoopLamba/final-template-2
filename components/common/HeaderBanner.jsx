import { Arrowicon } from "./Icon";

const HeaderBanner = ({ heading }) => {
  return (
    <div className="bg-[#FF9534] w-full mx-auto py-[33px] px-3">
      <div className="max-w-[1052px] w-full mx-auto flex justify-between items-center">
        <p className="text-white font-Roboto text-2xl sm:text-[33px] font-medium ">
          {heading}
        </p>

        <div className="flex items-center justify-start gap-[10px]">
          <p className="text-[rgba(255,255,255,0.60)] font-Roboto text-[16px] font-normal">
            Home
          </p>
          <div className="pt-1">
            <Arrowicon />
          </div>
          <p className="text-white font-Roboto text-base font-medium">
            {heading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
