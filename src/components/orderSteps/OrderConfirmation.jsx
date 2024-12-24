import { Button } from "flowbite-react";

const OrderConfirmation = () => {
  return (
    <div className="max-w-md mx-auto text-center p-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Your order is confirmed</h2>
      <p className="text-gray-600 mb-6">
        Thanks for shopping! Your order hasnt shipped yet, but we will send you
        an email when it does.
      </p>
      <div className="space-y-3">
        <Button color="dark" className="w-full">
          View Order
        </Button>
        <Button color="light" className="w-full">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;