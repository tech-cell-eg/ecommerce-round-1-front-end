import BestSeller from "../components/home/BestSeller";
import Deals from "../components/home/Deals";

const Home = () => {
  return (
    <>
      <BestSeller />
      <Deals
        initialDays={8}
        initialHours={0}
        initialMinutes={0}
        initialSeconds={0}
      />
    </>
  );
};

export default Home;
