import Image from "next/image";

const Banner = () => {
  return (
    <section
      className="relative flex justify-center items-center mx-auto py-10 lg:py-20"
      style={{
        width: "1240px",
        height: "378px",
        top: "40px",

        bottom: "50px",
        borderRadius: "20px 20px 20px 20px",
        opacity: "1",
        backgroundImage: "url(/images/category-banner.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Right Side: Text & Buttons */}
      <div className="lg:w-1/2 w-full text-center lg:text-right lg:ml-auto ">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#FDFDFD] mb-4 mr-20">
          One More Friend
        </h1>
        <h2 className="text-xl lg:text-3xl font-semibold text-[#FDFDFD] mb-6 mr-20">
          Thousands More Fun!
        </h2>
        <p
          className="text-[#CCD1D2] mb-8"
          style={{
            
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "18px",
            textAlign: "right",
            marginLeft: "150px",
            marginRight: "85px",
          }}
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 lg:text-left lg:mr-auto ml-20">
          <button className="bg-transparent border flex items-center border-[#FDFDFD] rounded-full py-3 px-6 text-[#FDFDFD] font-medium text-base transition-colors">
            View Intro
            <Image
              src="/images/vector.png"
              alt="Play Circle"
              width={24}
              height={24}
              className="ml-2"
            />
          </button>
          <button
            className="bg-[#FDFDFD] text-[#00171F] px-6 py-2"
            style={{ borderRadius: "57px" }}
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
