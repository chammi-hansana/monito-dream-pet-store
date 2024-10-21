import Image from "next/image";

const PetSellers = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <div className="flex items-baseline gap-2">
          <div className="w-100 h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
            Proud to be part of
          </div>
          <div className="w-[367px] h-[36px] font-[700] text-[24px] leading-9 text-[#003459]">
            Pet Sellers
          </div>
        </div>
        <button
          className="flex items-center gap-2 border border-[#003459] rounded-full py-2 px-4 bg-transparent text-[#003459] font-medium text-sm "
          aria-label="View all our sellers"
        >
          View all our sellers
          <Image
            src="/images/rightArrow.png"
            alt="Right Arrow"
            width={20}
            height={20}
          />
        </button>
      </header>
      <div className="flex flex-wrap justify-between items-center mt-10 gap-4">
        <Image
          src="/images/s-1.png"
          alt="Sheba logo"
          width={88} // Set width
          height={64} // Set height; adjust based on the image aspect ratio
          className="max-w-[168px] object-contain"
        />
        <Image
          src="/images/s-2.png"
          alt="Whiskas logo"
          width={114}
          height={114}
          className="max-w-[168px] object-contain"
        />
        <Image
          src="/images/s-3.png"
          alt="Bakers logo"
          width={104}
          height={46}
          className="max-w-[168px] object-contain"
        />
        <Image
          src="/images/s-4.png"
          alt="Felix logo"
          width={92}
          height={64}
          className="max-w-[168px] object-contain"
        />
        <Image
          src="/images/s-5.png"
          alt="Good Boy logo"
          width={92}
          height={92}
          className="max-w-[168px] object-contain"
        />
        <Image
          src="/images/s-6.png"
          alt="Butchers logo"
          width={130}
          height={56}
          className="max-w-[168px] object-contain"
        />
        <Image
          src="/images/s-7.png"
          alt="Pedigree logo"
          width={116}
          height={72}
          className="max-w-[168px] object-contain"
        />
      </div>
    </div>
  );
};

export default PetSellers;
