import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Movie {
  _id: string;
  title: string;
  category: string;
  price: number;
  instructions: string;
  image?: string;
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/api/movies/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError("Error fetching the movie. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="movie-details">
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <p>
            <strong>Category:</strong> {movie.category}
          </p>
          {movie.image && (
            <img
              src={movie.image}
              alt={movie.title}
            />
          )}
          <h3>Price:</h3>
          <ul>
            {movie.price}
          </ul>
          <h3>Instructions:</h3>
          <p>{movie.instructions}</p>
        </>
      ) : (
        <p>No movie found</p>
      )}
    </div>
  );
};

export default MovieDetails;