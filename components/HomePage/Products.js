import Image from "next/image";

const products = [
  {
    id: "1",
    name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    type: "Dog Food",
    size: "385gm",
    price: "350.000 VND",
    image: "/images/p-1.png",
    offer: "Free Toy & Free Shaker",
  },
  {
    id: "2",
    name: "Costumes Fashion Pet Clother Cowboy Rider",
    type: "Costume",
    price: "500.000 VND",
    image: "/images/p-2.png",
    offer: "Free Toy & Free Shaker",
  },
  {
    id: "3",
    name: "Costumes Chicken Drumstick Headband",
    type: "Costume",
    price: "400.000 VND",
    image: "/images/p-3.png",
    offer: "Free Cat Food",
  },
  {
    id: "4",
    name: "Plush Pet Toy",
    type: "Toy",
    price: "250.000 VND",
    image: "/images/p-4.png",
    offer: "Free Food & Shaker",
  },
  {
    id: "5",
    name: "Reflex Plus Adult Cat Food Salmon",
    type: "Cat Food",
    size: "1.5kg",
    price: "165.000 VND",
    image: "/images/p-5.png",
    offer: "Free Toy & Free Shaker",
  },
  {
    id: "6",
    name: "Cat scratching ball toy kitten sisal rope ball",
    type: "Toy",
    price: "1.100.000 VND",
    image: "/images/p-6.png",
    offer: "Free Food & Shaker",
  },
  {
    id: "7",
    name: "Cute Pet Cat Warm Nest",
    type: "Toy",
    price: "410.000 VND",
    image: "/images/p-7.png",
    offer: "Free Cat Food",
  },
  {
    id: "8",
    name: "Cute Pet Cat Warm Nest",
    type: "Toy",
    price: "410.000 VND",
    image: "/images/p-8.png",
    offer: "Free Cat Food",
  },
];

const ProductGallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-5 font-sans w-full mt-10">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full mb-10">
        <div className="text-left">
          <div className="w-100 h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
            Hard to choose the right products for your pets?
          </div>
          <div className="w-[367px] h-[36px] font-[700] text-[24px] leading-9 text-[#003459]">
            Our Products
          </div>
        </div>
        {/* View More Button */}
        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#003459]">
          <span className="font-medium text-[#003459]">View more</span>
          <Image
            src="/images/rightArrow.png"
            alt="Right Arrow"
            width={20}
            height={20}
          />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            key={product.id}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-3.5">
              <h3 className="text-[#00171f] mb-1 font-[700] text-[16px]">
                {product.name}
              </h3>

              {/* Product Type and Size on the Same Line */}
              <div className="flex items-center gap-4 mb-1">
                <div className="flex items-center gap-1">
                  <span className="font-[500] text-[12px] leading-[25px] text-[#667479]">
                    Product:
                  </span>
                  <span className="font-[700] text-[12px] leading-[25px] text-[#667479]">
                    {product.type}
                  </span>
                </div>

                {product.size && (
                  <div className="flex items-center gap-1">
                    <span className="font-[500] text-[12px] leading-[25px] text-[#667479]">
                      Size:
                    </span>
                    <span className=" font-[700] text-[12px] leading-[25px] text-[#667479]">
                      {product.size}
                    </span>
                  </div>
                )}
              </div>

              <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#00171F]">
                {product.price}
              </div>
              <div className="flex items-center bg-[#fceed5] rounded-lg py-1 px-2 text-sm font-bold text-[#002a48] mt-3">
                <Image
                  src="/images/gift.png"
                  alt="Offer Icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>{product.offer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
