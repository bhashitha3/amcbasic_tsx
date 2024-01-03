// import React from 'react';

// interface MovieItemProps {
//   movie: {
//     _id: string;
//     title: string;
//     genre: string;
//     year: number;
//     imageUrl: string;
//   };
//   onGetTicketsClick: (title: string) => void;
// }

// const MovieItem: React.FC<MovieItemProps> = ({ movie, onGetTicketsClick }) => {
//   return (
//     <div key={movie._id} className="movie-item" data-testid="movie-item">
//       <img src={movie.imageUrl} alt={movie.title} style={{ width: '200px', height: '200px' }} />
//       <h3 className="movie-name">{movie.title}</h3>
//       <p>Genre: {movie.genre}</p>
//       <p>Year: {movie.year}</p>
//       <button onClick={() => onGetTicketsClick(movie.title)}>Get Tickets</button>
//     </div>
//   );
// };

// export default MovieItem;


import React from 'react';

interface MovieItemProps {
  movie: {
    _id: string;
    title: string;
    genre: string;
    year: number;
    imageUrl: string;
  };
  onGetTicketsClick: (title: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onGetTicketsClick }) => {
  return (
    <div key={movie._id} className="movie-item" data-testid="movie-item">
      <img src={movie.imageUrl} alt={movie.title} style={{ width: '200px', height: '200px' }} />
      <h3 className="movie-name">{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
      <button onClick={() => onGetTicketsClick(movie.title)}>Get Tickets</button>
    </div>
  );
};

export default MovieItem;

