import Header  from '../components/HomePage/Header';
import HeroSection  from '../components/HomePage/HeroSection';
import PetCards  from '../components/HomePage/PetCards';
import Banner1  from '../components/HomePage/Banner1';

import Products  from '../components/HomePage/Products';


export default function Home() {
  return (
    <div>
       <Header />
      <HeroSection />
      <PetCards />
      <Banner1 />
     
      <Products />
    
    </div>
  );
}