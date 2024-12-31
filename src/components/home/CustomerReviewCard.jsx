import { Rating } from "flowbite-react";
import PropTypes from "prop-types";

const CustomerReviewCard = ({ name, review, rating, image }) => {
  const fallbackImage =
    "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col w-[130%] h-90">
      <div className="flex  justify-center mb-4">
        <Rating size="lg">
          {Array.from({ length: 5 }, (_, i) => (
            <Rating.Star key={i} filled={i < rating} />
          ))}
        </Rating>
      </div>

      <p className="text-gray-600 mb-6">{review}</p>

      <div className="flex flex-col ">
        <img
          src={image || fallbackImage}
          alt={name}
          className="w-16 h-16 rounded-full mb-4"
        />
        <h3 className="font-bold text-lg mb-1">{name}</h3>
      </div>
    </div>
  );
};

CustomerReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CustomerReviewCard;
