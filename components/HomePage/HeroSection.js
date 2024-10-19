import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="p-1 flex justify-between items-center shadow-md"
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center p-10">
        <div className="lg:w-1/2 space-y-4 mx-[50px] max-w-xl text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-[#002a48] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            One More Friend
          </h1>
          <h2 className="text-[#002a48] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Thousands More Fun!
          </h2>
          <p className="text-lg text-custom-blue">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
         
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-transparent border  flex items-center  border-[#003459] rounded-full py-3 px-6 text-[#003459] font-medium text-base  transition-colors">

              View Intro
              <Image
            src="/images/play-circle.png"
            alt="Play Circle"
            width={24}
            height={24}
             className="ml-2"
            
          />
            </button>
            <button className="bg-custom-blue text-white px-6 py-2" style={{ borderRadius: "57px" }}>
              Explore Now
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:mt-0">
          <Image
            src="/images/woman-holds-dog.png"
            alt="Woman holding a dog"
            width={800}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
