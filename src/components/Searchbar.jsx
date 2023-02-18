import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function Searchbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function handelSubmit(e) {
    e.preventDefault();
    navigate(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handelSubmit}
      action=""
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          autoComplete="off"
          id="search-field"
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none p-4 text-white"
        />
      </div>
    </form>
  );
}

export default Searchbar;
