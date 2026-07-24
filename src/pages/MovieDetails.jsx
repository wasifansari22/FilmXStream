import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { getMovieDetails, imageBaseUrl, getMovieTrailer } from '../services/tmdbApi';
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../redux/slices/watchLaterSlice";
import { FaHeart, FaRegHeart, FaFilm } from "react-icons/fa";
import Footer from '../components/Footer';
import TrailerModal from '../components/TrailerModal';
import MoviePoster from '../components/MoviePoster';
import Button from '../components/Button';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const savedMovies = useSelector(state => state.watchLater.movies);
  const isSaved = movie ? savedMovies.some(item => item.id === movie.id) : false;

  const handleWatchLater = () => {
    if (isSaved) {
      dispatch(removeMovie(movie.id));
    } else {
      dispatch(addMovie(movie));
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);

        // const genreData = await getGenres();
        // setGenres(genreData);

        const videos = await getMovieTrailer(id);
        const bestVideo = getBestVideo(videos);

        if (bestVideo) {
          setTrailerKey(bestVideo.key);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const getBestVideo = (videos) => {
    const priorities = [
      "Trailer",
      "Teaser",
      "Featurette",
      "Behind the Scenes",
      "Clip"
    ];

    for (const type of priorities) {
      const video = videos.find(
        (item) =>
          item.site === "YouTube" &&
          item.type === type
      );

      if (video) return video;
    }
    return null;
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#141414] text-white">
        <Header />
        <Loader type="details" />
      </main>
    );
  }

  if (!movie) {
    return (
      <Layout>
        <EmptyState
          icon={<FaFilm className="text-red-500 text-5xl" />}
          title="Movie Not Found"
          description="This movie doesn't exist or is no longer available."
          buttonText="Browse Movies"
          buttonLink="/movies"
        />
      </Layout>
    );
  }

  return (
    <main className="min-h-screen bg-[#141414] text-white">

      <div
        className="relative h-[65vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <Header />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="-mt-32 md:-mt-40 relative z-20 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">

          <div className="w-72 h-420px rounded-xl overflow-hidden shadow-2xl flex shrink-0">
            <MoviePoster
              posterPath={movie.poster_path}
              title={movie.title}
              className="w-48 sm:w-56 md:w-72 h-300px sm:h-360px md:h-430px object-cover rounded-xl shadow-2xl mx-auto md:mx-0"
            />
          </div>


          <div className='text-center md:text-left flex-1'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {movie.title}
            </h1>

            <p className="mt-4 text-yellow-400 text-xl">
              ⭐ {movie.vote_average.toFixed(1)}
            </p>

            <p className="mt-2 text-gray-400">
              Release Date: {movie.release_date}
            </p>

            <p className="mt-2 text-gray-400">
              Runtime: {movie.runtime} min
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-red-600 px-4 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="mt-8 mb-4 leading-8 text-gray-300 max-w-3xl">
              {movie.overview}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                variant="secondary"
                disabled={!trailerKey}
                onClick={() => setShowTrailer(true)}
              >
                ▶ Watch Trailer
              </Button>

              {/* watch later button */}
              <button
                onClick={handleWatchLater}
                className={`px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 cursor-pointer ${isSaved
                  ? "bg-red-600 hover:bg-red-700"
                  : "border border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                  }`}
              >
                {isSaved ? <FaHeart /> : <FaRegHeart />}
                {isSaved ? "Saved" : "Watch Later"}
              </button>
            </div>

            {/* back link */}
            <div className="mt-5">
              <Link
                to="/movies"
                className="inline-flex items-center text-red-500 hover:text-white transition-all duration-300"
              >
                ← Back to Movies
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* render modal */}
      <TrailerModal
        trailerKey={showTrailer ? trailerKey : ""}
        onClose={() => setShowTrailer(false)} />

      <div className="mt-20">
        <Footer />
      </div>
    </main >
  );
};

export default MovieDetails;