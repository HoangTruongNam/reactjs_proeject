import React from 'react';

function Product({ productimg, title, descript, category, price, star }) {
  return (
    <div className="p-4 flex flex-col ">
      <div className="img-container pt-8 w-32 h-52 mx-auto grid place-items-center">
        <img className="align-middle object-cover mx-auto" src={productimg} alt={title} />
      </div>
      <div>{category}</div>
      <div className="w-66 font-bold break-words lg:line-clamp-3 md:line-clamp-2 product-ctn">{title}</div>
      <div className="w-66 h-ctn break-words lg:line-clamp-3 md:line-clamp-2 product-ctn">{descript}</div>
<<<<<<< HEAD
      <div className="flex mt-2 items-center">
        <div className="mr-4 p-1">${price}</div>
        <div className="flex items-center text-xs px-2 w-8 likebox">⭑{star}</div>
=======
      <div className="flex mt-2">
        <div className="mr-4 p-1">${price}</div>
        <div className="flex items-center text-xs px-2 w-10 likebox">{star}⭑</div>
>>>>>>> main
      </div>
    </div>
  );
}

export default Product;
