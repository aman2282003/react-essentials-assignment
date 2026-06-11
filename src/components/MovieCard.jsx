import '../styles/MovieCard.css';

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="movie-card">
      <div className="movie-image-wrapper">
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <button
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => onToggleFavorite(movie.id)}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-name">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        <p className="movie-genre">{movie.genre}</p>
        <div className="movie-rating">
          <span className="stars">⭐ {movie.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
