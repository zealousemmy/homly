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

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
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
    </div>
  );
}

export default App;
