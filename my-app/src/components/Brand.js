import React from 'react';

function Brand({ brand, onClick }) {
  return (
    <div>
      <div onClick={onClick} className="cursor-pointer">
        {brand}
      </div> 
    </div>
  );
}

export default Brand;
