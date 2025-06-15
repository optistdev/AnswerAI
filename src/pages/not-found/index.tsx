const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-background-primary text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/" className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
        Go Home
      </a>
    </div>
  );
};

export default NotFoundPage;
