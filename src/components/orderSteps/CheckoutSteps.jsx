import { useSelector } from "react-redux";

const CheckoutSteps = () => {
  const activeStep = useSelector((state) => state.checkout.activeStep);

  const steps = [
    { number: 1, name: "Address" },
    { number: 2, name: "Payment" },
    { number: 3, name: "Review" },
  ];

  return (
    <div className="w-[100%] py-4">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`flex items-center ${
                activeStep >= step.number ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                  ${
                    activeStep >= step.number
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-400"
                  }`}
              >
                {step.number}
              </div>
              <span className="ml-2">{step.name}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="w-24 h-0.5 mx-4 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSteps;
