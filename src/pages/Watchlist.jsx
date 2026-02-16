import { useMovies } from "../Contexts/MovieContext";
import MovieGrid from "../components/MovieGrid";

function Watchlist() {
  const { watchlist } = useMovies();

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Watchlist</h2>
        <p>Movies you plan to watch</p>
      </div>

      {watchlist.length > 0 ? (
        <MovieGrid movies={watchlist} />
      ) : (
        <div className="empty-state">
          <p>No movies in your watchlist yet.</p>
        </div>
      )}
    </main>
  );
}

export default Watchlist;
