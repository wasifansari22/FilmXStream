import { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieGrid from "../components/MovieGrid";
import Loader from "../components/Loader";
import { getPopularMovies, getGenres } from "../services/tmdbApi";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";

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

  // display loader
  if (loading) {
    return <Loader />;
  }

  // filtered movies - converts the movie title to lowercase. eg: bat: Batman Begins, The Batman....
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "" || movie.genre_ids.includes(Number(selectedGenre));
    return matchesSearch && matchesGenre;
  });

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Header />

      <section className="max-w-7xl mx-auto px-6 pt-28 pb-10">
        <h1 className="text-4xl font-bold mb-8">
          Popular Movies
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        {/* passing the filtered movies */}
        <MovieGrid movies={filteredMovies} />
      </section>
    </main>
  )
}

export default Movies