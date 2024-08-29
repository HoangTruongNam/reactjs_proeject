import React from 'react';

function Brand({ brand, isSelected, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onChange(brand)}
        className="cursor-pointer"
      />
      <label className="ml-2">{brand}</label>
    </div>
  );
}

export default Brand;
