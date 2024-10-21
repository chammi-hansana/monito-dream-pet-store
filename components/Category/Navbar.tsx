import Image from "next/image";
import Nav from "../Nav";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center shadow-md w-full h-[100px] px-4 lg:px-0 py-4 lg:py-[28px]">
      <div className="relative z-10 flex items-center  ml-0 lg:ml-0 px-0">
        {/* Logo */}

        <Image
          src="/images/monito.png"
          alt="Monitó"
          width={115}
          height={40}
          className="mt-3 opacity-100 ml-40 mr-20"
        />

        {/* Navigation - aligned closely to the logo */}

        <Nav />

        {/* Right side - Search, Join Button, Currency Selector */}
        <div className="flex items-center gap-[14px] w-auto min-w-[615px] h-auto min-h-[44px] ">
          {/* Search Bar */}
          <div className="flex w-[280px] h-auto min-h-[44px] rounded-[46px] px-4 py-3 gap-3 bg-[#FDFDFD] opacity-100">
            <Image
              src="/images/search-icon.png"
              alt="Search Icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search something here"
              className="font-medium text-[14px] leading-5 text-[#99A2A5] placeholder:text-[#99A2A5] focus:outline-none"
            />
          </div>

          {/* Join Community Button */}
          <button className="bg-[#003459] font-xl gap-[10px] text-white px-[14px] pr-[28px] pl-[28px] rounded-[57px] h-11 w-auto min-w-[203px]">
            <p className="font-[700px] text-[16px] leading-6 text-[#FDFDFD] w-[147px] h-6">
              Join the community
            </p>
          </button>

          {/* Currency Selector */}
          <div className="flex pt-[10px] pr-[8px] pb-[8px] pl-[8px] gap-1">
            <div className="flex gap-[6px] w-auto min-w-[60px] h-auto min-h-[23px]">
              <Image
                src="/images/currency-icon.png"
                alt="Currency Icon"
                width={21}
                height={21}
              />

              <p className="font-[500px] text-[16px] leading-6">VND</p>
            </div>
            <Image
              src="/images/downArrow.png"
              alt="Down Arrow"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
