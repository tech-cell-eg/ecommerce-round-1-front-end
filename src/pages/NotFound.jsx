const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-found-illustration-download-in-svg-png-gif-file-formats--website-result-cuterr-illustrations-pack-people-3020775.png?f=webp"
        alt="404 Illustration"
        className="w-96 h-auto mb-6"
      />
      <a
        href="/"
        className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
