import { useMovies } from "../Contexts/MovieContext";

function MovieCard({ movie, favorites = [], setFavorites = () => {} }) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useMovies();

  const isFavorite = favorites.some(fav => fav.id === movie.id);
  const inWatchlist = isInWatchlist(movie.id);

  function toggleFavorite() {
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  function toggleWatchlist() {
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
        </div>

        <button className="favorite-button" onClick={toggleFavorite}>
          {isFavorite ? '❤️ Remove from Favorites' : '♡ Add to Favorites'}
        </button>

        <button className="favorite-button" onClick={toggleWatchlist}>
          {inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
