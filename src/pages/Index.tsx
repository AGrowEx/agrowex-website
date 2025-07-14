import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Bhoomi from "@/components/Bhoomi";
import Founders from "@/components/Founders";
import Journey from "@/components/Journey";
import BusinessModel from "@/components/BusinessModel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problems />
      <div id="solutions">
        <Solutions />
      </div>
      <div id="bhoomi">
        <Bhoomi />
      </div>
      <div id="journey">
        <Journey />
      </div>
      <div id="team">
        <Founders />
      </div>
      <div id="business">
        <BusinessModel />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
