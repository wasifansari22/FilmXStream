import { Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#141414] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <div className="w-24 h-24 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-8">
          <FaFilm className="text-red-500 text-5xl" />
        </div>

        <h1 className="text-7xl font-extrabold text-red-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-5">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-5 leading-7">
          The page you're looking for doesn't exist,
          may have been moved,
          or the URL is incorrect.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 hover:scale-110 px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
          >
            Go Home
          </Link>

          <Link
            to="/movies"
            className="border border-red-600 text-red-500 hover:bg-red-600 hover:scale-110 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
          >
            Browse Movies
          </Link>
        </div>

      </div>

    </main>
  );
};

export default NotFound;