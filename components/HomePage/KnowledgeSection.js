import Image from 'next/image';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-[12px] shadow-sm flex flex-col overflow-hidden mb-5 flex-1 ">
      <Image src={image} alt={title} width={240} height={240} className="w-full h-[240px] object-cover" />
      <div className="p-2">
        <div className="bg-[#00a7e7] text-[#fdfdfd] rounded-[28px] px-2 py-1 font-bold text-[10px] mb-2 inline-block">
          Pet knowledge
        </div>
        <div>
          <h3 className="font-bold text-[16px] leading-[24px] text-[#00171f]">
            {title}
          </h3>
          <p className="font-normal text-[14px] leading-[20px] text-[#242b33]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const KnowledgeSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-10">
      <div className="w-full max-w-[1440px]">
      <header className="mb-[40px]">
        <h1 className="font-medium text-[16px] leading-[24px] text-[#000000]">
          You already know ?
        </h1>
        <h2 className="font-bold text-[24px] leading-[36px] text-[#003459]">
          Useful pet knowledge
        </h2>
         {/* View More Button */}
         <div className="">
            <button className="flex w-auto min-w-[151px] h-auto min-h-[44px] left-[1159px] rounded-[57px] border-[1.5px] border-[#003459] py-[12px] px-[28px] gap-[8px]">
              <div className="font-[500] text-[14px] leading-5 text-[#003459]">
                View more
              </div>
              <Image
                src="/images/rightArrow.png"
                alt="Right Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
      </header>

      <div className="flex gap-[20px] justify-between mb-[20px]">
        <Card
          image="/images/k-1.png"
          title="What is a Pomeranian? How to Identify Pomeranian Dogs"
          description="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."
        />
        <Card
          image="/images/k-2.png"
          title="Dog Diet You Need To Know"
          description="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
        />
        <Card
          image="/images/k-3.png"
          title="Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively"
          description="Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."
        />
      </div>

    
    </div>
    </div>
   
  );
};
  

export default KnowledgeSection;
