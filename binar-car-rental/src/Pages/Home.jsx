import { Fragment } from 'react';
import HeroSection from '../Component/HeroSection/HeroSection';
import OurServices from '../Component/OurService/OurServices';
import WhyUs from '../Component/WhyUs/WhyUs';
import CtaBanner from '../Component/CtaBanner/CtaBanner';
import Faq from '../Component/Faq/Faq';
import Footer from '../Component/Footer/Footer';


function Home() {
  return (
    <Fragment>
      <HeroSection />
      <OurServices />
      <WhyUs />
      <CtaBanner />
      <Faq />
      <Footer />
    </Fragment>
  );
}

export default Home;