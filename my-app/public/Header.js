import '../asset/css/Header.css'
import React from 'react';

function Header({ onSearchChange }) { // Nhận hàm tìm kiếm như một prop
    const handleSearchInputChange = (e) => {
      onSearchChange(e.target.value); // Truyền giá trị tìm kiếm ngược lại cho App
    };
  return (
    <div>
      <div className="bg-img">
        <img src="https://instantsearchjs.netlify.app/examples/react/e-commerce/cover.c5eecd4b.png" alt=""></img>
      </div>
      <div className=" pt-20 flex justify-center items-center">
        <img src="../asset/icon/svgexport-1.png" alt='logo'></img>
      </div>
      <div className="logo flex justify-center items-center text-4xl text-white">Stop looking for an item — find it.</div>
      <div className="">
        <input className="search-bar flex justify-center items-center mx-auto px-4 py-4 border rounded"
          type="text" 
          placeholder="Search products..." 
          onChange={handleSearchInputChange} 
        />
      </div>
    </div>
  );
}
export default Header;
