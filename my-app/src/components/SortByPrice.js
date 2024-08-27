import React from 'react';

const SortByPrice = ({ sortOrder, onSortChange }) => {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="flex">
      <select
        id="sort-price"
        value={sortOrder}
        onChange={handleChange}
        className="px-4 py-2 "
      >
        <option value="asc">Price ascending</option>
        <option value="desc">Price descending</option>
      </select>
    </div>
  );
};

export default SortByPrice;
