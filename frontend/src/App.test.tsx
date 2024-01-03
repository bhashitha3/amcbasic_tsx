import React from 'react';
import { render, screen, act, fireEvent} from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

const mockAxios = new MockAdapter(axios);
const mockMovies = [
  { _id: '1', title: 'Movie 1', genre: 'Action', year: 2023 },
  { _id: '2', title: 'Movie 2', genre: 'Adventure', year: 2023 },
  { _id: '3', title: 'Movie 3', genre: 'Adventure', year: 2023 },
];

beforeEach(() => {
  mockAxios.onGet('http://localhost:5005/movies').reply(200, mockMovies);
});

afterEach(() => {
  mockAxios.reset();
});

test('renders header with the correct text', async () => {
  await act(async () => {
    render(<App />);
  });

  const header = screen.getByText(/See a Movie/i);
  expect(header).toBeInTheDocument();
  console.log('Test Case 1 Passed');
});

test('renders genre filter with default "All Genres" selected', async () => {
  await act(async () => {
    render(<App />);
  });

  const genreFilter = screen.getByLabelText(/Filter by Genre:/i) as HTMLSelectElement;
  expect(genreFilter.value).toBe('0');
  console.log('Test Case 2 Passed');
});

test('changes genre filter value on selection', async () => {
  await act(async () => {
    render(<App />);
  });

  const genreFilter = screen.getByLabelText(/Filter by Genre:/i) as HTMLSelectElement;
  act(() => {
    fireEvent.change(genreFilter, { target: { value: '28' } });
  });
  expect(genreFilter.value).toBe('28');
  console.log('Test Case 3 Passed');
});

test('renders movies fetched from the mock API', async () => {
  await act(async () => {
    render(<App />);
  });

  const movies = await screen.findAllByTestId('movie-item');
  expect(movies.length).toBeGreaterThan(0);
  console.log('Test Case 4 Passed');
  console.log('Number of movies:', movies.length);
});



// test('renders movies fetched from the mock API', async () => {
//   render(<App />);
//   await waitFor(() => {
//     const movies = screen.getAllByTestId('movie-item');
//     expect(movies.length).toBeGreaterThan(0);
//   });
// });