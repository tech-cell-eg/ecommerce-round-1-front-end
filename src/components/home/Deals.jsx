import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Deals = ({
  initialDays,
  initialHours,
  initialMinutes,
  initialSeconds,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    day: initialDays,
    hour: initialHours,
    min: initialMinutes,
    sec: initialSeconds,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const targetDate =
      new Date().getTime() +
      initialDays * 24 * 60 * 60 * 1000 +
      initialHours * 60 * 60 * 1000 +
      initialMinutes * 60 * 1000 +
      initialSeconds * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeLeft({ day: 0, hour: 0, min: 0, sec: 0 });
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setTimeLeft({ day: days, hour: hours, min: minutes, sec: seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialDays, initialHours, initialMinutes, initialSeconds]);

  const handleRedirect = () => {
    navigate("/shop");
  };

  return (
    <div className="flex flex-col lg:flex-row m-4 h-[600px]">
      <div className="flex-1 p-8 space-y-4 flex flex-col justify-center text-black">
        <h2 className="text-3xl font-bold">Deals of the Month</h2>
        <p className="text-lg">
          It is a long established fact that a reader will be distracted by
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <div className="flex gap-6 text-black">
          <span className="border-2 border-black p-4 text-center rounded-lg font-semibold ">
            {timeLeft.day}d
          </span>
          <span className="border-2 border-black p-4 text-center rounded-lg font-semibold">
            {timeLeft.hour}h
          </span>
          <span className="border-2 border-black p-4 text-center rounded-lg font-semibold">
            {timeLeft.min}m
          </span>
          <span className="border-2 border-black p-4 text-center rounded-lg font-semibold">
            {timeLeft.sec}s
          </span>
        </div>
        <Button
          className="bg-black text-white w-full sm:w-[50%] lg:w-[30%] mt-4 flex justify-between items-center"
          onClick={handleRedirect}
        >
          View all products
          <span className="ml-2">&#8594;</span>
        </Button>
      </div>
      <img
        src="/deals.png"
        alt="Deals of Month"
        className="rounded-lg w-full sm:w-[50%] lg:w-[50%] object-cover mt-4 lg:mt-0 hidden lg:block"
      />
    </div>
  );
};

Deals.propTypes = {
  initialDays: PropTypes.number.isRequired,
  initialHours: PropTypes.number.isRequired,
  initialMinutes: PropTypes.number.isRequired,
  initialSeconds: PropTypes.number.isRequired,
};

export default Deals;
