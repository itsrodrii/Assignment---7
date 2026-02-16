import { useEffect, useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import { getPopularMovies } from '../services/movieService';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

function Home({ movies, setMovies, favorites, setFavorites }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid
        movies={movies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </main>
  );
}

export default Home;
