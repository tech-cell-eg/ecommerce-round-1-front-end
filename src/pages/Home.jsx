import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BestSeller from "../components/home/BestSeller";
import CategorySlider from "../components/home/CategorySlider";
import CustomerReviews from "../components/home/CustomerReviews";
import Deals from "../components/home/Deals";
import Header from "../components/home/Header";
import InstgramStories from "../components/home/InstgramStories";
import OurStory from "../components/OurStory/OurStory";
import { Helmet } from 'react-helmet'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
     <Helmet>
    <title>Krist</title>
    <meta name="description" content="Krist Home"/>
  </Helmet>
      <Header />
      <CategorySlider />
      <BestSeller />
      <Deals
        initialDays={8}
        initialHours={0}
        initialMinutes={0}
        initialSeconds={0}
      />
      <CustomerReviews />
      <div id="ourstory">
        <OurStory />
      </div>
      <InstgramStories />
    </>
  );
};

export default Home;
