import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";



interface Movie {
  _id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  image?: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    // Cargar peliculas favoritas desde el almacenamiento local
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = (id: string) => {
    const updatedFavorites = favorites.filter((movie) => movie._id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h1>My Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <div
              key={movie._id}
              className="favorite-item">
              <MovieCard movie={movie} />
              <button
                onClick={() => removeFromFavorites(movie._id)}
                className="remove-btn">
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite movies yet. Start adding some!</p>
      )}
    <img src="/assets/empty.png" alt="No favorite movies" />
    </div>
  );
};

export default Favorites;