import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './asset/scripts/i18n';
import './asset/css/Product.css';
import Product from './components/Product';
import Brand from './components/Brand';
import Category from './components/Category';
import Toggle from './components/Toggle';
import PriceRangeSlider from './components/PriceRangeSlider';
import Header from './components/Header';
import SortByPrice from './components/SortByPrice';
import ItemsPerPageSelector from './components/ItemsPerPageSelector';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productData, setProductData] = useState([]);
  const [brand, setBrand] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [ratingCounts, setRatingCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [sortOrder, setSortOrder] = useState('asc');
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [priceRange, setPriceRange] = useState([0, 640]);
  const [selectedRating, setSelectedRating] = useState(null); // New state for selected rating

  useEffect(() => {
    fetch('http://localhost:3001/Productdata')
      .then(response => response.json())
      .then(data => {
        setProductData(data);
        const uniqueBrands = [...new Set(data.map(item => item.brand))];
        setBrand(uniqueBrands);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        const counts = countRatings(data);
        setRatingCounts(counts);
      })
      .catch(error => console.error('Error fetching data:', error));

    fetch(`${process.env.REACT_APP_API_HOST}/Categories`)
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [itemsPerPage]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
  };

  const sortedProducts = [...productData].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const filteredProducts = sortedProducts.filter(item => 
    (!selectedBrand || item.brand === selectedBrand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1] &&
    (!selectedRating || item.rating === selectedRating) // Filter by selected rating
  );

  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
    setCurrentPage(1);
  }, [selectedBrand, selectedRating, productData, sortOrder, itemsPerPage, filteredProducts.length]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating); // Update selected rating
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
  };

  const countRatings = (products) => {
    const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    products.forEach(product => {
      const rating = product.rating;
      if (rating >= 1 && rating <= 5) {
        ratingCounts[rating]++;
      }
    });
    return ratingCounts;
  };

  return (
    <div>
      <Header></Header>
      <div className="flex mr-10 border-t">
        
        <div className="filter min-w-72 max-w-72 border-t">
          <div>
            <h1>{t('category')}</h1>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
          </div>
          <div>
            {categories.map((category) => (
              <Category key={category} category={category} />
            ))}
          </div>
          <div>
            {brand.map((b, idx) => (
              <Brand key={idx} brand={b} onClick={() => handleBrandClick(b)} />
            ))}
          </div>
          <div>
            <PriceRangeSlider minPrice={0} maxPrice={640} onChange={handlePriceRangeChange} />
          </div>
          <Toggle />
          <div>
            <h2>Rating Counts</h2>
            <ul className='flex flex-col-reverse'>
              {Object.entries(ratingCounts).map(([rating, count]) => (
                <li key={rating}>
                  <button onClick={() => handleRatingClick(Number(rating))}>
                    Rating {rating}: {count}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div >
        <div className="flex justify-end">
              <SortByPrice sortOrder={sortOrder} onSortChange={handleSortChange} />
              <ItemsPerPageSelector itemsPerPage={itemsPerPage} onItemsPerPageChange={handleItemsPerPageChange} />
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-t">
            {currentProducts.map((item) => (
              <Product
                key={item.id}
                productimg={item.image}
                title={item.name}
                descript={item.description}
                category={item.categories[0]}
                price={item.price}
                star={item.rating}
              />
            ))}
          </div>
          <div className="pagination-controls flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2"
            >
              <img className="h-2 w-2" src="https://www.svgrepo.com/show/486232/left-arrow-backup-2.svg" alt="Previous" />
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
              className="px-4 py-2"
            >
              <img className="h-2 w-2 rotate-180" src="https://www.svgrepo.com/show/486232/left-arrow-backup-2.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
