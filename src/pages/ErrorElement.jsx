const ErrorElement = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <img
          src="https://www.shutterstock.com/image-vector/bankruptcy-icon-broken-shopping-cart-600nw-2191456725.jpg"
          alt="Error"
          className="mx-auto mb-4 w-32 h-32 object-contain"
        />
        <h2 className="text-3xl font-semibold text-black-600 mb-2">
          Something went wrong
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We are sorry, but something went wrong. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 focus:outline-none"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ErrorElement;
