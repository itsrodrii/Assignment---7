import { useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

function Favorites({ favorites, setFavorites }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Favorites</h2>
        <p>Your saved movies collection</p>
      </div>

      {favorites.length > 0 ? (
        <MovieGrid
          movies={favorites}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ) : (
        <div className="empty-state">
          <p>No favorite movies yet. Start adding some from the home page!</p>
        </div>
      )}
    </main>
  );
}

export default Favorites;
