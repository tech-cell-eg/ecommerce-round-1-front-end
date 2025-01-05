import { useEffect, useState } from "react";
import { IoCardOutline } from "react-icons/io5";
import { PiHeadphonesLight } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { fetchAllinstgramstories } from "../../api/instgramStory/getAllinstgramstories";

function InstgramStories() {
  const [instaStory, setInstaStory] = useState([]);
  const phrases = [
    {
      icon: <BsBoxSeam size={40} />,
      title: "Free Shipping",
      description: "Free shipping for the order above $150",
    },
    {
      icon: <CiDollar size={40} />,
      title: "Money Guarantee",
      description: "Within 30 days of exchange",
    },
    {
      icon: <PiHeadphonesLight size={40} />,
      title: "Online Support",
      description: "24 hours a day, 7 days a week",
    },
    {
      icon: <IoCardOutline size={40} />,
      title: "Flexible Payment",
      description: "Pay with multiple credit cards",
    },
  ];

  useEffect(() => {
    const getinstastory = async () => {
      const allinstastory = await fetchAllinstgramstories();
      setInstaStory(allinstastory);
    };
    getinstastory();
  }, []);

  return (
    <section className="container-main bg-white my-3 py-20">
      <h1 className="capitalize text-center text-4xl font-medium">
        our instgram stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
        {instaStory.map((story, index) => (
          <div className="flex flex-col gap-4 justify-center" key={story.id}>
            <div className="md:h-[360px] relative">
              <img
                src={story.image_link}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full bg-black/0 hover:bg-black/5 opacity-0 hover:opacity-100 transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <Link
                  to={story.insta_link}
                  className="text-lg text-center bg-white p-2 w-fit h-fit rounded-full"
                >
                  <FaInstagram className="text-black" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div>{phrases[index % phrases.length].icon}</div>
              <h4 className="text-xl font-medium">
                {phrases[index % phrases.length].title}
              </h4>
              <p className="text-center text-gray-600">
                {phrases[index % phrases.length].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstgramStories;
