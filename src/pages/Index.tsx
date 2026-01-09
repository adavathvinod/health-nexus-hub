import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import HeroSlider from "@/components/home/HeroSlider";
import ServicesGrid from "@/components/home/ServicesGrid";
import TrustSignals from "@/components/home/TrustSignals";
import EmergencyCTA from "@/components/home/EmergencyCTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vanasthali Hospital | Best Multi-specialty Hospital in Vanasthalipuram, Hyderabad</title>
        <meta
          name="description"
          content="Vanasthali Hospital - Your trusted multi-specialty hospital in Vanasthalipuram, Hyderabad. 24/7 Emergency Care, Gynaecology, Pediatrics, Ortho, ENT & more. Rated 4.4/5 on Google."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSlider />
          <ServicesGrid />
          <TrustSignals />
          <EmergencyCTA />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
