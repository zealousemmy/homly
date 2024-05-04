import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import NewApproach from "./components/NewApproach";
import HowItWorks from "./components/HowItWorks";
import WhyHomely from "./components/WhyHomely";
import TextTitleImage from "./components/TextTitleImage";
import HowItWorksTwo from "./components/HowItWorksTwo";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import YourSecurity from "./components/YourSecurity";
import MeetTheTeam from "./components/MeetTheTeam";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Navbar />
      <Hero handlePayHere={openModal} />
      <SectionOne />
      <NewApproach />
      <HowItWorks />
      <WhyHomely />
      <TextTitleImage />
      <HowItWorksTwo />
      <YourSecurity />
      <AboutUs />
      <MeetTheTeam />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
