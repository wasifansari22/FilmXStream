import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import Loader from "../components/Loader";
import { getPopularMovies, getGenres } from "../services/tmdbApi";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";
import { FaFilm, FaHeartBroken } from "react-icons/fa";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await getPopularMovies();
      setMovies(data);

      const genreData = await getGenres();
      setGenres(genreData);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  const filteredMovies = (movies || []).filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "" || movie.genre_ids.includes(Number(selectedGenre));
    return matchesSearch && matchesGenre;
  });

  return (
    <Layout className="min-h-screen bg-[#141414] text-white">
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-10">

        <PageHeader
          title="Popular Movies"
          subtitle="Discover trending movies from around the world."
        />

        <div className="flex flex-col md:flex-row gap-5 mb-10">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </div>

        {
          filteredMovies.length === 0 ? (
            <EmptyState
              icon={<FaFilm className="text-red-500 text-5xl" />}
              title="Movie Not Found"
              description={
                searchTerm && selectedGenre
                  ? "No movies match your search and selected genre."
                  : searchTerm
                    ? `No movies found for "${searchTerm}".`
                    : selectedGenre
                      ? "No movies found in this genre."
                      : "No movies available."
              }
              buttonText="Clear Filters"
              onButtonClick={() => {
                setSearchTerm("");
                setSelectedGenre("");
              }}
            />
          ) : (
            <MovieGrid movies={filteredMovies} />
          )
        }

      </section>
    </Layout>
  );
};

export default Movies;