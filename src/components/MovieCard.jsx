function MovieCard({ movie, favorites = [], setFavorites = () => {} }) {
  const isFavorite = favorites.some(fav => fav.id === movie.id);

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
      </div>
    </div>
  );
}

export default MovieCard;
