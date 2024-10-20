import Image from 'next/image';

const products = [
  {
    id: '1',
    name: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil',
    type: 'Dog Food',
    size: '385gm',
    price: '350.000 VND',
    image: '/images/p-1.png',
    offer: 'Free Toy & Free Shaker',
  },
  {
    id: '2',
    name: 'Costumes Fashion Pet Clother Cowboy Rider',
    type: 'Costume',
    price: '500.000 VND',
    image: '/images/p-2.png',
    offer: 'Free Toy & Free Shaker',
  },
  {
    id: '3',
    name: 'Costumes Chicken Drumstick Headband',
    type: 'Costume',
    price: '400.000 VND',
    image: '/images/p-3.png',
    offer: 'Free Cat Food',
  },
  {
    id: '4',
    name: 'Plush Pet Toy',
    type: 'Toy',
    price: '250.000 VND',
    image: '/images/p-4.png',
    offer: 'Free Food & Shaker',
  },
  {
    id: '5',
    name: 'Reflex Plus Adult Cat Food Salmon',
    type: 'Cat Food',
    size: '1.5kg',
    price: '165.000 VND',
    image: '/images/p-5.png',
    offer: 'Free Toy & Free Shaker',
  },
  {
    id: '6',
    name: 'Cat scratching ball toy kitten sisal rope ball',
    type: 'Toy',
    price: '1.100.000 VND',
    image: '/images/p-6.png',
    offer: 'Free Food & Shaker',
  },
  {
    id: '7',
    name: 'Cute Pet Cat Warm Nest',
    type: 'Toy',
    price: '410.000 VND',
    image: '/images/p-7.png',
    offer: 'Free Cat Food',
  },
  {
    id: '8',
    name: 'Cute Pet Cat Warm Nest',
    type: 'Toy',
    price: '410.000 VND',
    image: '/images/p-8.png',
    offer: 'Free Cat Food',
  },
];

const ProductGallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-16 font-sans w-full ">
      {/* Section Header */}
      <div className="flex justify-between mt-16 px-[130px]">
          <div className="w-auto min-w-[367px] h-auto min-h-[63px] gap-[2px]">
            <div className="w-[320px] h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
            Hard to choose right products for your pets?
            </div>
            <div className="w-[367px] h-[36px] font-[700] text-[24px] leading-9 text-[#003459]">
            Our Products
            </div>
          </div>
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
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {products.map((product) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg" key={product.id}>
            <Image src={product.image} alt={product.name} width={300} height={256} className="w-full h-64 object-cover" />
            <div className="p-4">
            <h3 className="font-bold text-lg text-[#00171f] mb-1">{product.name}</h3>
              <div className="text-sm text-[#667479] mb-1">
                <div>
                  Product: <strong>{product.type}</strong>
                </div>
                {product.size && (
                  <div>
                    Size: <strong>{product.size}</strong>
                  </div>
                )}
              </div>
              <p className="font-bold text-md text-[#00171f] mt-1">{product.price}</p>
              <div className="flex items-center bg-[#fceed5] rounded-lg py-1 px-2 text-sm font-bold text-[#002a48] mt-2">
                <Image src="/images/gift.png" alt="Offer Icon" width={20} height={20} className="mr-2" />
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
