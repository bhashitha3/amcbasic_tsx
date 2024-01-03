import React, { useState, useEffect } from 'react';
import Header from './components/header';
import GenreFilter from './components/GenreFilter';
import Tabs from './components/Tabs';
import MovieItem from './components/MovieItem';
import axios from 'axios';
import './App.css';

const genres = [
  { id: 0, name: 'All Genres' },
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
];

function App(): JSX.Element {
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<string>('nowPlaying');

  const handleLogoClick = async (): Promise<void> => {
    try {
      const response = await axios.get<any[]>(`http://localhost:5005/movies`);
      setMovies(response.data);
    } catch (error) {
      console.error(`Error fetching movies:`, error);
    }
  };
 

  const handleGenreChange = (genreId: number): void => {
    setSelectedGenre(genreId);
  };

  const handleTabChange = (tab: string): void => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    handleLogoClick();
  }, []);

  const currentYear = new Date().getFullYear();

  const nowPlayingMovies = movies.filter((movie) => movie.year === 2023);
  const upcomingMovies = movies.filter((movie) => movie.year === 2024);

  const filteredMovies =
    selectedGenre === 0
      ? nowPlayingMovies
      : nowPlayingMovies.filter((movie) => movie.genre === genres.find((g) => g.id === selectedGenre)?.name);

  const upcomingFilteredMovies =
    selectedGenre === 0
      ? upcomingMovies
      : upcomingMovies.filter((movie) => movie.genre === genres.find((g) => g.id === selectedGenre)?.name);

  const displayedMovies = selectedTab === 'nowPlaying' ? filteredMovies : upcomingFilteredMovies;

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <GenreFilter genres={genres} selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
        <Tabs selectedTab={selectedTab} onTabChange={handleTabChange} />
        <div className="movie-list">
          {displayedMovies.map((movie) => (
            <MovieItem key={movie._id} movie={movie} onGetTicketsClick={(title) => alert(`Get Tickets for ${title}`)} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;


