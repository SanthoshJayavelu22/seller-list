import React from 'react';

const SearchBox = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control border-secondary"
        placeholder="Search sellers..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
