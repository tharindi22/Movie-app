import React from 'react'

const SearchBar = () => {
  return (
    <div className="main flex justify-center items-center py-5 px-4">
    <div className="flex shadow-md rounded-lg border border-gray-400">
      <input 
        type="text" 
        placeholder="Search..." 
        className="bg-gray-200 placeholder-gray-400 px-3 py-2 outline-none border-none rounded-l-lg w-72 text-black focus:ring-2 focus:ring-[#40407a]" 
      />
      <button 
        className="bg-[#40407a] px-5 text-white rounded-r-lg hover:bg-[#30305e] active:scale-95 transition-transform border-l border-gray-400">
        Search
      </button>
    </div>
  </div>
  
  )
}

export default SearchBar