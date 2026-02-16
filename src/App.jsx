import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { MovieProvider } from './Contexts/MovieContext';

import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Watchlist from './pages/Watchlist';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <MovieProvider>
      <Router>
        <div className="app">
          <Header
            setMovies={setMovies}
            favorites={favorites}
            setFavorites={setFavorites}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  movies={movies}
                  setMovies={setMovies}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
