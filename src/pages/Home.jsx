import BestSeller from "../components/home/BestSeller";
import CategorySlider from "../components/home/CategorySlider";
import CustomerReviews from "../components/home/CustomerReviews";
import Deals from "../components/home/Deals";
import Header from "../components/home/Header";
import InstgramStories from "../components/home/InstgramStories";
import OurStory from "../components/OurStory/OurStory";


const Home = () => {
 
  return (
    <>
       <Header/>
      <CategorySlider />
      <BestSeller />
      <Deals
        initialDays={8}
        initialHours={0}
        initialMinutes={0}
        initialSeconds={0}
      />
      <CustomerReviews/>
      <OurStory/>
      <InstgramStories />

    </>
  );
};

export default Home;
