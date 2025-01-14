import React from 'react';

const MovieCard = ({ movies, loading }) => {
  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="main flex flex-wrap px-4 lg:px-10">
      {movies?.map((movie, index) => {
        const { Poster, Title, Year } = movie;
        return (
          <div key={index} className="child p-2 lg:w-1/4 w-full">
            <div className="sub_child bg-[#002e4b] p-3 rounded-2xl">
              <img
                className="w-full rounded-lg mb-2"
                src={Poster}
                alt={Title}
              />
              <h2 className="text-white text-xl font-bold">{Title}</h2>
              <h3 className="text-white text-lg mb-2">Year: {Year}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
