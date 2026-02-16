import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchMovies } from '../services/movieService';

function Header({ setMovies }) {
  const [query, setQuery] = useState('');

  async function handleSearch(e) {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      console.error('Search failed:', err);
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="app-title">MovieShelf</Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </nav>

        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search movies..."
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-button" type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
