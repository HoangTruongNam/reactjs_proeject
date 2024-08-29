import React from 'react';

<<<<<<< HEAD
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
=======
function Brand({ brand, onClick }) {
  return (
    <div>
      <div onClick={onClick} className="cursor-pointer">
        {brand}
      </div> 
>>>>>>> main
    </div>
  );
}

export default Brand;
