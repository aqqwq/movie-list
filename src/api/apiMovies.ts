const API_URL = 'http://www.omdbapi.com/?apikey=be8dad8e';

export interface SearchMovies {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

export interface MovieById extends SearchMovies {
  imdbRating: string;
  Plot: string;
  Genre: string;
  Runtime: string;
  totalSeasons: string;
  Rated: string;
}

export interface Movies {
  movies: SearchMovies[];
}

export async function getMovies(inputSearch: string): Promise<Movies> {
  const res = await fetch(`${API_URL}&s=${inputSearch}`);
  if (!res.ok) throw new Error('Something went wrong with fetch');
  const { Search } = await res.json();
  return Search;
}

export async function getMovieById(id: string): Promise<MovieById> {
  const res = await fetch(`${API_URL}&i=${id}`);
  if (!res.ok) throw new Error('Something went wrong with fetch');
  const data = await res.json();
  return data;
}
