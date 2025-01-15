import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';


const App = () => {
  const [allMovieData, setAllMovieData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    if (!search) return;
    try {
      setLoading(true);
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=a1de9591`);
      const data = await response.json();
      setAllMovieData(data.Search || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-800 min-h-screen">
        <SearchBar search={search} setSearch={setSearch} onSearch={fetchMovieData} />
        <MovieCard movies={allMovieData} loading={loading} />
        
      </div>
      
      
        
      
    </div>
  );
};

export default App;
