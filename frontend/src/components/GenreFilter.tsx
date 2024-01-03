import React from 'react';

interface GenreFilterProps {
  genres: { id: number; name: string }[];
  selectedGenre: number;
  onGenreChange: (genreId: number) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="genre-filter">
      <label htmlFor="genre">Filter by Genre:</label>
      <select id="genre" value={selectedGenre} onChange={(e) => onGenreChange(Number(e.target.value))}>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
