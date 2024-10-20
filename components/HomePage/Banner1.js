import Image from 'next/image';

const Banner1 = () => {
  return (
    <div className="relative flex items-center justify-between mx-auto bg-gradient-to-r from-[#003459] to-[#fdfdfd] rounded-[20px] p-5 overflow-hidden font-sans w-[90%] max-w-[1200px] h-auto">
      {/* Rectangle 1 - Background */}
      <Image
        src="/images/rectangle-1.png"
        alt="Background Shape 1"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
      />
      
      {/* Rectangle 9 - Background */}
      <Image
        src="/images/rectangle-9.png"
        alt="Background Shape 9"
        width={506}
        height={360}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[150px] z-0 opacity-50"
      />

      {/* Girl with Dog Image */}
      <Image
        src="/images/horizontal-shot-adult-girl.png"
        alt="Adult Girl with Dog"
        width={513}
        height={342}
        className="w-1/2 max-w-[513px] z-10 relative"
      />

      {/* Text Section */}
      <div className="text-[#003459] p-5 max-w-[500px] z-10 relative">
        <h1 className="font-extrabold text-[52px] leading-[68px] mb-2">One More Friend</h1>
        <h2 className="font-bold text-[36px] leading-[54px] mb-2">Thousands More Fun!</h2>
        <p className="font-medium text-[12px] leading-[18px] text-[#242b33] mb-5">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div className="flex gap-5">
          <button className="flex items-center border border-[#003459] rounded-[57px] px-7 py-3 bg-transparent text-[#003459] font-medium text-[16px] cursor-pointer">
            View Intro
            <Image src="/assets/media-play-circle.svg" alt="Play" width={24} height={24} className="ml-2" />
          </button>
          <button className="px-7 py-3 rounded-[57px] bg-[#003459] text-[#fdfdfd] font-medium text-[16px] cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
