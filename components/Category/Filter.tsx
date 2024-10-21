import Image from "next/image";

interface Pet {
  name: string;
  gender: string;
  age: string;
  price: string;
  imageSrc: string;
  alt: string;
}

const Filter = () => {
  return (
    <div className="flex flex-col w-screen md:w-full gap-2 h-screen md:sticky md:top-24 ml-40 mt-20">
      <h3 className="text-xl mb-5 font-bold text-pet-primary">Filter</h3>
      <form>
        {/* Gender Filter */}
        <div className="flex flex-col gap-3">
          <h2 className="text-black font-semibold">Gender</h2>
          <label className="pl-2">
            <input type="checkbox" name="gender" value="male" className="mr-2" />
            Male
          </label>
          <label className="pl-2">
            <input type="checkbox" name="gender" value="female" className="mr-2" />
            Female
          </label>
        </div>
        <hr className="border-t border-slate-200 h-1 my-4 w-[15%]" />
        
        {/* Color Filter */}
        <div className="flex flex-col gap-3">
          <h2 className="text-black font-semibold">Color</h2>
          <label className="pl-2">
            <input type="checkbox" name="colors" value="red" className="mr-2" />
            Red
          </label>
          <label className="pl-2">
            <input type="checkbox" name="colors" value="apricot" className="mr-2" />
            Apricot
          </label>
          <label className="pl-2">
            <input type="checkbox" name="colors" value="black" className="mr-2" />
            Black
          </label>
          <label className="pl-2">
            <input type="checkbox" name="colors" value="black & white" className="mr-2" />
            Black & White
          </label>
          <label className="pl-2">
            <input type="checkbox" name="colors" value="silver" className="mr-2" />
            Silver
          </label>
          <label className="pl-2">
            <input type="checkbox" name="colors" value="tan" className="mr-2" />
            Tan
          </label>
        </div>
        <hr className="border-t border-slate-200 h-1 my-4 w-[15%]" />
        
        {/* Price Filter */}
        <div className="flex flex-col gap-3">
          <h2 className="text-black font-semibold">Price</h2>
          <div className="flex gap-3 items-center">
            <input type="number" name="minPrice" placeholder="Min" className="pl-1 w-20" />
            <input type="number" name="maxPrice" placeholder="Max" className="pl-1 w-20" />
          </div>
        </div>
        <hr className="border-t border-slate-200 h-1 my-4 w-[15%]" />
        
        {/* Breed Filter */}
        <div className="flex flex-col gap-3">
          <h2 className="text-black font-semibold">Breed</h2>
          <label className="pl-2">
            <input type="checkbox" name="breed" value="Small" className="mr-2" />
            Small
          </label>
          <label className="pl-2">
            <input type="checkbox" name="breed" value="Medium" className="mr-2" />
            Medium
          </label>
          <label className="pl-2">
            <input type="checkbox" name="breed" value="Large" className="mr-2" />
            Large
          </label>
        </div>
        <hr className="border-t border-slate-200 h-1 my-4 w-[15%]" />
      </form>
    </div>
  );
};

const PetCard: React.FC<{ pet: Pet }> = ({ pet }) => {
  return (
    <div className="flex flex-col justify-between border w-auto h-auto min-w-[280px] min-h-[378px] rounded-xl pt-4 px-2 gap-2 bg-[#FDFDFD]  ">
      {/* Pet Image */}
      <Image
        src={pet.imageSrc}
        alt={pet.alt}
        width={264}
        height={264}
        className="rounded-[10px] bg-[#FFFFFF]"
      />
      {/* Pet Description */}
      <div className="flex flex-col justify-between w-auto h-full min-h-[98px] min-w-[264px] px-2 pt-2 pb-2 gap-2">
        <div>
          {/* Pet Name */}
          <div className="w-[255px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
            {pet.name}
          </div>
          {/* Pet Details */}
          <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
            {/* Gender */}
            <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
              <div className="w-[34px] h-[18px] font-[500] text-[12px] leading-[25px] text-[#667479]">
                Gender:
              </div>
              <div className="w-[28px] h-[18px] font-[700] text-[12px] leading-[25px] text-[#667479]">
                {pet.gender}
              </div>
            </div>
            <div className="w-auto h-auto min-w-[18px] font-[700] text-[12px] ml-1 min-h-[25px] text-[#667479]"></div>
            {/* Age */}
            <div className="flex w-auto h-auto min-w-[91px] min-h-[25px] gap-[6px]">
              <div className="w-[26px] h-[26px] font-[500] text-[12px] leading-[25px] text-[#667479]">
                Age:
              </div>
              <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[25px] text-[#667479]">
                {pet.age}
              </div>
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[5px] text-[#00171F]">
          {pet.price}
        </div>
      </div>
    </div>
  );
};

const PetCards = () => {
  const pets: Pet[] = [
    {
      name: "MO231 - Pomeranian White",
      gender: "Male",
      age: "02 months",
      price: "6,900,000 VND",
      imageSrc: "/images/image-1.png",
      alt: "Dog Image 1",
    },
    {
      name: "MO502 - Poodle Tiny Yellow",
      gender: "Female",
      age: "02 months",
      price: "3,900,000 VND",
      imageSrc: "/images/image-2.png",
      alt: "Dog Image 2",
    },
    {
      name: "MO102 - Poodle Tiny Sepia",
      gender: "Male",
      age: "02 months",
      price: "4,000,000 VND",
      imageSrc: "/images/image-3.png",
      alt: "Dog Image 3",
    },
    {
      name: "MO512 - Alaskan Malamute Grey",
      gender: "Male",
      age: "02 months",
      price: "8,900,000 VND",
      imageSrc: "/images/image-4.png",
      alt: "Dog Image 4",
    },
    {
      name: "MO504 - Pembroke Corgi Tricolor",
      gender: "Female",
      age: "02 months",
      price: "9,000,000 VND",
      imageSrc: "/images/image-5.png",
      alt: "Dog Image 5",
    },
    {
      name: "MO237 - Pembroke Corgi Cream",
      gender: "Male",
      age: "02 months",
      price: "7,900,000 VND",
      imageSrc: "/images/image-6.png",
      alt: "Dog Image 6",
    },
    {
      name: "MO228 - Pomeranian White",
      gender: "Male",
      age: "02 months",
      price: "6,500,000 VND",
      imageSrc: "/images/image-7.png",
      alt: "Dog Image 7",
    },
    {
      name: "MO512 - Poodle Tiny Dairy Cow",
      gender: "Male",
      age: "02 months",
      price: "5.000.000 VND",
      imageSrc: "/images/image-8.png",
      alt: "Dog Image 8",
    },
    {
      name: "MO512 - Poodle Tiny Dairy Cow",
      gender: "Male",
      age: "02 months",
      price: "5.000.000 VND",
      imageSrc: "/images/image-5.png",
      alt: "Dog Image 8",
    },
    {
      name: "MO102 - Poodle Tiny Sepia",
      gender: "Male",
      age: "02 months",
      price: "4,000,000 VND",
      imageSrc: "/images/image-3.png",
      alt: "Dog Image 3",
    },
    {
      name: "MO512 - Alaskan Malamute Grey",
      gender: "Male",
      age: "02 months",
      price: "8,900,000 VND",
      imageSrc: "/images/image-4.png",
      alt: "Dog Image 4",
    },
    {
      name: "MO504 - Pembroke Corgi Tricolor",
      gender: "Female",
      age: "02 months",
      price: "9,000,000 VND",
      imageSrc: "/images/image-5.png",
      alt: "Dog Image 5",
    },
    {
      name: "MO237 - Pembroke Corgi Cream",
      gender: "Male",
      age: "02 months",
      price: "7,900,000 VND",
      imageSrc: "/images/image-6.png",
      alt: "Dog Image 6",
    },
    {
      name: "MO228 - Pomeranian White",
      gender: "Male",
      age: "02 months",
      price: "6,500,000 VND",
      imageSrc: "/images/image-7.png",
      alt: "Dog Image 7",
    },
    {
      name: "MO512 - Poodle Tiny Dairy Cow",
      gender: "Male",
      age: "02 months",
      price: "5.000.000 VND",
      imageSrc: "/images/image-8.png",
      alt: "Dog Image 8",
    },
  ];
 return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[1440px]">
        {/* Section Header */}
        <div className="flex justify-between mt-16 px-[100px]">
          <div className="w-auto min-w-[367px] h-auto min-h-[63px] gap-[2px]">
            <div className="w-[91px] h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
             
            </div>
            <div className="w-[367px] h-[36px] font-[700] text-[24px] leading-9 text-[#003459]">
              Small Dog
            </div>
          </div>
          {/* View More Button */}
          <div className="">
            <button className="flex w-auto min-w-[151px] h-auto min-h-[44px] left-[1159px] rounded-[57px] border-[1.5px] border-[#003459] py-[12px] px-[28px] gap-[8px]">
              <div className="font-[500] text-[14px] leading-5 text-[#003459]">
                Sort by : Popular
              </div>
              <Image
                src="/images/rightArrow.png"
                alt="Right Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Pet Cards */}
        <div className="grid grid-cols-3 gap-[8px] mt-6 px-[100px]">
          {pets.map((pet, index) => (
            <PetCard key={index} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
 
};

const PetStore = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-1/4">
        <Filter />
      </div>
      <div className="w-3/4 mr-[55px]">
        <PetCards />
      </div>
    </div>
  );
};

export default PetStore;