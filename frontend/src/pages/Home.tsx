import React from "react";
import MovieCard from "../components/MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";

const Home: React.FC = () => {
  const { movies, loading } = useFetchMovies();

  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="home">
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          />
      ))}
    </div>
  );
};
export default Home;