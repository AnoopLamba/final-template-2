import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      {/* Who */}
      <div className="max-w-[1052px] w-full mx-auto lg:px-3 px-4">
        <div className="pt-[50px]">
          <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic font-normal uppercase">
            <span className="text-[#FF9534] font-poppins text-[32px] md:text-[40px] not-italic font-medium md:font-semibold leading-[40px] uppercase">
              WHo we are
            </span>{" "}
            One of the most important, yet underrated, pages on an entire
            website is the About Us page, particularly for small- and
            medium-sized business owners (SMBs). The About Us page is one of
            your best chances to create a meaningful connection with a site
            visitor that builds confidence in the potential customer and lays
            the foundation of a solid business relationship.
          </p>

          <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic font-normal uppercase">
            In this blog post, we&apos;ll outline what an About Us page is, a
            few of the most important elements of an About Us page, show off
            some awesome About Us page examples, and highlight a few of the
            beautiful About Us page templates that are available to Duda
            customers and partners.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-[1052px] w-full mx-auto lg:px-3 px-4 pt-[50px]">
        <div className="flex justify-between gap-[20px] max-lg:flex-col lg:gap-[40px] xl:gap-[50px]">
          <div className="max-w-[300px] md:max-w-[400px] lg:max-w-[501px] w-full mx-auto">
            <Image
              src="/img/our-mission.png"
              width={501}
              height={425}
              alt="mission img"
            />
          </div>

          <div className="max-w-[501px] w-full mx-auto">
            <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic font-normal">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
              eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad minim
              veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod temp incididunt ut labore dol magna aliqua. Ut enim
              ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed eiusmod temp incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
              adipng elit, sed do eiusmod temp incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="max-w-[1052px] w-full mx-auto lg:px-3 px-4 py-[50px]">
        <div className="flex justify-between gap-[20px] max-lg:flex-col  lg:gap-[40px] xl:gap-[50px]">
          <div className="max-w-[300px] md:max-w-[400px] lg:max-w-[501px] w-full mx-auto">
            <Image
              src="/img/our-vision.png"
              width={501}
              height={425}
              alt="our vision"
            />
          </div>

          <div className="max-w-[501px] w-full mx-auto">
            <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic font-normal">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
              eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad minim
              veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod temp incididunt ut labore dol magna aliqua. Ut enim
              ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed eiusmod temp incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
              adipng elit, sed do eiusmod temp incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
