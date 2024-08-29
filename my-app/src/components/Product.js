import React, { useState } from 'react';

function Product({ productImg, title, descript, category, price, star }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="p-4 flex flex-col">
      <div className="img-container pt-8 w-32 h-52 mx-auto grid place-items-center">
        <img className="align-middle object-cover mx-auto" src={productImg} alt={title} />
      </div>
      <div>{category}</div>
      <div className="w-66 font-bold break-words lg:line-clamp-3 md:line-clamp-2 product-ctn">{title}</div>
      <div 
        className="w-66 h-ctn break-words lg:line-clamp-3 md:line-clamp-2 product-ctn relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {descript}
        {showTooltip && (
          <div className="absolute left-0 mt-2 p-2 bg-gray-700 text-white text-sm rounded shadow-lg">
            {descript}
          </div>
        )}
      </div>
      <div className="flex mt-2 items-center">
        <div className="mr-4 p-1">${price}</div>
        <div className="flex items-center text-xs px-2 w-8 likebox">⭑{star}</div>
      </div>
    </div>
  );
}

export default Product;
