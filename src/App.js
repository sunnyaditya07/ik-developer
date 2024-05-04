import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Information from "./components/Information";
import Brand from "./components/Brand";
import CustomerReview from "./components/CustomerReview";
import CaseStudies from "./components/CaseStudies";
import DummyTest from "./components/DummyTest";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Information />
      <Brand />
      <CustomerReview />
      <CaseStudies />
      {/* <DummyTest /> */}
    </div>
  );
};

export default App;
