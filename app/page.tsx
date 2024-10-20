import Header  from '../components/HomePage/Header';
import HeroSection  from '../components/HomePage/HeroSection';
import PetCards  from '../components/HomePage/PetCards';
import Banner1  from '../components/HomePage/Banner1';

import Products  from '../components/HomePage/Products';
import PetSellers  from '../components/HomePage/PetSellers';
import Banner2  from '../components/HomePage/Banner2';
import KnowledgeSection  from '../components/HomePage/KnowledgeSection';
import Footer  from '../components/HomePage/Footer';


export default function Home() {
  return (
    <div>
       <Header />
      <HeroSection />
      <PetCards />
      <Banner1 />
     
      <Products />
      <PetSellers />
      <Banner2 />
      <KnowledgeSection />
      <Footer />
    
    </div>
  );
}