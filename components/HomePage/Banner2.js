import Image from "next/image";

const Banner2 = () => {
  return (
    <section
      className="relative flex justify-center items-center mx-auto py-10 lg:py-20"
      style={{
        width: "1180px",
        height: "378px",
        top: "40px",

        bottom: "50px",
        borderRadius: "20px 20px 20px 20px",
        opacity: "1",
        backgroundImage: "url(/images/bg-banner-2.png)", // Adjust the path to your background image
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[1180px] h-[378px] rounded-[20px] p-[40px] flex items-center justify-between relative overflow-hidden mx-auto">
        <div className="max-w-[50%]">
          <h1 className="font-extrabold text-[52px] leading-[68px] text-[#003459] flex items-center gap-[10px]">
            Adoption
            <Image
              src="/images/fontisto_paw.png"
              alt="Paw"
              width={32}
              height={32}
            />
          </h1>
          <h2 className="font-bold text-[36px] leading-[54px] text-[#003459] capitalize my-[20px]">
            We Need Help. So Do They.
          </h2>
          <p className="text-[12px] leading-[18px] text-[#666666] mb-[20px]">
            Adopt a pet and give it a home,
            <br />
            it will love you back unconditionally.
          </p>
          <div className="flex gap-[15px]">
            <button className="flex items-center justify-center gap-[8px] px-[28px] py-[14px] rounded-[57px] bg-[#003459] text-[#FDFDFD] cursor-pointer transition-colors duration-300">
              Explore Now
            </button>
            <button className="flex items-center justify-center gap-[8px] px-[28px] py-[14px] border border-[#003459] text-[#003459] rounded-[57px] bg-transparent">
              View Intro
              <Image
                src="/images/play-circle.png"
                alt="Play"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
