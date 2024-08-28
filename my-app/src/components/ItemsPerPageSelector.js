// src/components/ItemsPerPageSelector.js

import React from 'react';

const ItemsPerPageSelector = ({ itemsPerPage, onItemsPerPageChange }) => {
  return (
    <div>
      <select className="ml-4 h-10" value={itemsPerPage} onChange={onItemsPerPageChange}>
        <option value={4}>4 hits per page</option>
        <option value={8}>8 hits per page</option>
        <option value={12}>12 hits per page</option>
        <option value={16}>16 hits per page</option>
      </select>
    </div>
  );
};

export default ItemsPerPageSelector;
