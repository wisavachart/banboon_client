import SectionAd from "@/components/home/SectionAd";
import SectionAdSecond from "@/components/home/SectionAdSecond";
import SectionBestSeller from "@/components/home/SectionBestSeller";
import SectionNewArrival from "@/components/home/SectionNewArrival";

const Catalog = () => {
  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem]">
      <SectionAd />
      <SectionNewArrival />
      <SectionAdSecond />
      <SectionBestSeller />
    </div>
  );
};

export default Catalog;
