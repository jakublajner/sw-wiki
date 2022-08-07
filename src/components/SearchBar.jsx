import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ onSearchTermChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = (value) => {
    setQuery(value);
    onSearchTermChange(value);
  };

  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 z-20"
        placeholder="Search Characters, Planets..."
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func,
};

export default SearchBar;
