// components/PriceRangeSlider.js
import React, { useState } from 'react';
import '../asset/css/PriceRangeSlider.css'; // Import CSS for styling

const PriceRangeSlider = ({ minPrice, maxPrice, onChange }) => {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleSliderChange = (event) => {
    const newRange = [...priceRange];
    const index = Number(event.target.dataset.index);
    newRange[index] = Number(event.target.value);

    // Ensure the min value is less than or equal to the max value
    if (newRange[0] < newRange[1]) {
      setPriceRange(newRange);
      onChange(newRange);
    }
  };

  return (
    <div className="price-range-slider min-w-60">
      <label>Price Range: {`$${priceRange[0]} - $${priceRange[1]}`}</label>
      <div className="slider-container">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange[0]}
          data-index="0"
          onChange={handleSliderChange}
          className="thumb thumb-left"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange[1]}
          data-index="1"
          onChange={handleSliderChange}
          className="thumb thumb-right"
        />
        <div className="slider-track"></div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
