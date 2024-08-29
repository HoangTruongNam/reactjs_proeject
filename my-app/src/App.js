import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './asset/scripts/i18n'
import './asset/css/Product.css';
import Product from './components/Product';
import Brand from './components/Brand';
import Toggle from './components/Toggle';
import PriceRangeSlider from './components/PriceRangeSlider';
import SortByPrice from './components/SortByPrice';
import ItemsPerPageSelector from './components/ItemsPerPageSelector';
import RatingFilter from './components/RatingFilter'; 
import Accordion from './components/Categories';
import Header from './components/Header';
import Reset from './components/ResetFilter';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productData, setProductData] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [ratingCounts, setRatingCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [sortOrder, setSortOrder] = useState('asc');
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [priceRange, setPriceRange] = useState([0, 640]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/Productdata`)
      .then(response => response.json())
      .then(data => {
        setProductData(data);
        const uniqueBrands = [...new Set(data.map(item => item.brand))];
        setBrands(uniqueBrands);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        const counts = countRatings(data);
        setRatingCounts(counts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [itemsPerPage]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prevSelectedBrands => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter(b => b !== brand);
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const sortedProducts = [...productData].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const filteredProducts = sortedProducts.filter(item => 
    (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
    item.price >= priceRange[0] && item.price <= priceRange[1] &&
    (!selectedRating || item.rating === selectedRating) &&
    (!selectedCategory || 
      (item.categories[0] === selectedCategory.categoryFirst &&
       item.categories[1] === selectedCategory.categorySecond)) &&
    (!isFreeShipping || item.free_shipping) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
    setCurrentPage(1);
  }, [selectedBrands, selectedRating, productData, sortOrder, itemsPerPage, filteredProducts.length, isFreeShipping]); 

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const { t } = useTranslation();

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
      <div>
        <LanguageSwitcher />
      </div>
      <Header onSearchChange={handleSearchChange} />
      <div className="flex mr-10 mt-64 mx-20">
        <div className="filter min-w-72 max-w-72 mr-8 hidden lg:block">
          <div className="flex">
            <h1 className="mb-3 font-bold text-xl">{t('filter')}</h1>
            <div className="pt-1 flex ml-32 text-xs text-gray-500"><Reset></Reset></div>
          </div>
          <div className="border-t">
            <Accordion products={productData} onCategorySelect={handleCategorySelect} />
          </div>
          <div className="border-t mt-10 pt-10">
            <div className="mb-4 font-bold">{t('brand')}</div>
            {brands.map((brand, idx) => (
              <Brand key={idx} brand={brand} isSelected={selectedBrands.includes(brand)} onChange={handleBrandChange} />
            ))}
          </div>
          <div className="border-t mt-10 pt-10">
            <div className="mb-4 font-bold">{t('price')}</div>
            <PriceRangeSlider minPrice={0} maxPrice={640} onChange={handlePriceRangeChange} />
          </div>
          <div className="border-t mt-10 pt-10">
            <Toggle toggled={isFreeShipping} onToggle={() => setIsFreeShipping(prev => !prev)} /> {/* Pass props */}
          </div>
          <div className="border-t mt-10 pt-10">
            <RatingFilter ratingCounts={ratingCounts} onRatingClick={handleRatingClick} /> 
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <SortByPrice sortOrder={sortOrder} onSortChange={handleSortChange} />
            <ItemsPerPageSelector itemsPerPage={itemsPerPage} onItemsPerPageChange={handleItemsPerPageChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-t">
            {currentProducts.map((item) => (
              <Product
                key={item.id}
                productImg={item.image}
                title={item.name}
                descript={item.description}
                category={item.categories[0]}
                price={item.price}
                star={item.rating}
              />
            ))}
          </div>
          <div className="pagination-controls flex justify-center mt-4">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2">
              <img className="h-2 w-2" src="https://www.svgrepo.com/show/486232/left-arrow-backup-2.svg" alt={t('pagi')} />
            </button>
            {pageNumbers.map((pageNumber) => (
              <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={`px-4 mx-1 py-2 rounded ${currentPage === pageNumber ? 'pagi-bg text-white font-bold' : 'bg-gray-100'}`}>
                {pageNumber}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2">
              <img className="h-2 w-2 rotate-180" src="https://www.svgrepo.com/show/486232/left-arrow-backup-2.svg" alt={t('pagi')} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
