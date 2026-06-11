import { useState } from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieDatabase.css';

function MovieDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Sample movie data
  const moviesData = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: 'Drama',
      rating: 9.3,
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop',
    },
    {
      id: 2,
      title: 'The Godfather',
      year: 1972,
      genre: 'Crime',
      rating: 9.2,
      image: 'https://images.unsplash.com/photo-1478720568477-152d9e3fb27d?w=300&h=450&fit=crop',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      rating: 9.0,
      image: 'https://images.unsplash.com/photo-1489599849228-ed4dc59b2e9f?w=300&h=450&fit=crop',
    },
    {
      id: 4,
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
      rating: 8.8,
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop',
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      year: 1994,
      genre: 'Crime',
      rating: 8.9,
      image: 'https://images.unsplash.com/photo-1482880322289-83593e61c5ba?w=300&h=450&fit=crop',
    },
    {
      id: 6,
      title: 'Forrest Gump',
      year: 1994,
      genre: 'Drama',
      rating: 8.8,
      image: 'https://images.unsplash.com/photo-1495148388773-643d8eef2fd1?w=300&h=450&fit=crop',
    },
    {
      id: 7,
      title: 'Interstellar',
      year: 2014,
      genre: 'Sci-Fi',
      rating: 8.6,
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=450&fit=crop',
    },
    {
      id: 8,
      title: 'The Matrix',
      year: 1999,
      genre: 'Sci-Fi',
      rating: 8.7,
      image: 'https://images.unsplash.com/photo-1551876805-3591df3c3ba9?w=300&h=450&fit=crop',
    },
  ];

  // B1: Handle search input with state
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  // B2: Filter movies based on search query
  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // B4: Toggle favorite status
  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(movieId)
        ? prevFavorites.filter((id) => id !== movieId)
        : [...prevFavorites, movieId]
    );
  };

  // B5: Get favorite movies
  const favoriteMovies = moviesData.filter((movie) =>
    favorites.includes(movie.id)
  );

  // B3: Conditional rendering logic
  const hasSearchInput = searchQuery.trim().length > 0;
  const hasResults = filteredMovies.length > 0;

  return (
    <div className="movie-database">
      <div className="movie-container">
        <h1 className="movie-title">🎬 Movie Database</h1>

        {/* B1: Search Input */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Search movies by title or genre..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          {searchQuery && (
            <button onClick={handleClearSearch} className="clear-btn">
              ✕
            </button>
          )}
        </div>

        {/* B3: Conditional Rendering - No Input */}
        {!hasSearchInput && (
          <div>
            <h2 className="section-title">All Movies</h2>
            <div className="movies-grid">
              {moviesData.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isFavorite={favorites.includes(movie.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        )}

        {/* B3: Conditional Rendering - With Search but No Results */}
        {hasSearchInput && !hasResults && (
          <div className="no-results">
            <p className="no-results-icon">🔍</p>
            <p className="no-results-text">
              No movies found matching "{searchQuery}"
            </p>
            <button onClick={handleClearSearch} className="try-again-btn">
              Try Another Search
            </button>
          </div>
        )}

        {/* B3: Conditional Rendering - Search Results */}
        {hasSearchInput && hasResults && (
          <div>
            <h2 className="section-title">
              Search Results ({filteredMovies.length})
            </h2>
            <div className="movies-grid">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isFavorite={favorites.includes(movie.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        )}

        {/* B5: Favorite Movies Section */}
        {favoriteMovies.length > 0 && (
          <div className="favorites-section">
            <h2 className="section-title">❤️ Your Favorites ({favoriteMovies.length})</h2>
            <div className="movies-grid">
              {favoriteMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDatabase;
