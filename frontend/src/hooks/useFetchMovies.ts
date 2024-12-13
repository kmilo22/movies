import { useState, useEffect } from "react";
import axios from "axios";

interface Movie {
  _id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  image?: string;
}

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading };
};

export default useFetchMovies;