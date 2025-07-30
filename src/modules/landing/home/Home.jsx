//---------------------------------------
import UseHelmet from "../../../hooks/useHelmet";
import Banner from "./Bannnerr/Banner";
import Overview from "./Overview/Overview";
import TourismAndGuides from "./TourismAndGuides";
import Faqs from "../../../pages/faq/FAQ.jsx";
import Stories from "./Overview/Stories/Stories.jsx";
import LiveStats from "./LiveStats/LiveStats.jsx";
import NewsletterSignup from "./NewsletterSignup/NewsletterSignup.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import PartnerWithUs from "./PartnerWithUs/PartnerWithUs.jsx";
import HowItWorks from "./HowItWorks/HowItWorks.jsx";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
import CallToActionFull from "./CallToActionFull/CallToActionFull.jsx";
import TrendingDestinations from "./TrendingDestinations/TrendingDestinations.jsx";
import "react-tabs/style/react-tabs.css";
import ExploreTabs from "./ExploreTabs/ExploreTabs.jsx";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <UseHelmet title="Home" />

      <Banner />
      <Overview />

      {/* Tab View Section for Packages and Guides */}

      <ExploreTabs />

      <TrendingDestinations />
      <Stories apiEndpoint="stories" />
      <LiveStats />
      <Testimonials />
      <HowItWorks />
      <WhyChooseUs />
      <Faqs />
      <CallToActionFull />
      <PartnerWithUs />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
