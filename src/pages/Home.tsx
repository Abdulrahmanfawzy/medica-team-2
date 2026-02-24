import Hero from "../components/layout/Hero";
import SpecialtySection from "../components/layout/SpecialtySection";
import TopRatedDoctors from "../components/layout/TopRatedDoctors";
import FAQSection from "../components/layout/FAQSection";
import Footer from "../components/layout/Footer";

const Home = () => {

  return (
    <>
      <Hero />
      <SpecialtySection />
      <TopRatedDoctors />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;