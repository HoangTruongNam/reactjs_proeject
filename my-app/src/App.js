import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './asset/scripts/i18n';
import './asset/css/Product.css'
import { Productdata } from './asset/scripts/productsdata';
import Product from './components/Product';

function App() {
  const itemsPerPage = 8; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Productdata.length / itemsPerPage);
  const currentProducts = Productdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex mr-10 border-t">
      <div>
      <h1>{t('category')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
    </div>

      <div className="border-t">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((item) => (
          <Product
            key={item.id}
            productimg={item.productimg}
            title={item.title}
            descript={item.descript}
            category={item.category}
            price={item.price}
            star={item.star}
          />
        ))}
      </div>
      <div className="pagination-controls flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 "
        >
        <img className="h-2 w-2" src="https://www.svgrepo.com/show/486232/left-arrow-backup-2.svg" alt='?'></img>

        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 mx-1 py-2 rounded ${currentPage === pageNumber ? 'pagi-bg text-white font-bold' : 'bg-gray-100'}`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 "
        >
        <img className="h-2 w-2 rotate-180" src="https://www.svgrepo.com/show/486232/left-arrow-backup-2.svg" alt='?'></img>
        </button>
      </div>
    </div>
    </div>
    
  );
}

export default App;
