import React from 'react';
<<<<<<< HEAD
import '../asset/scripts/i18n'
import { useTranslation } from 'react-i18next';
=======
>>>>>>> main

const SortByPrice = ({ sortOrder, onSortChange }) => {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };
<<<<<<< HEAD
  const {t} = useTranslation();
=======
>>>>>>> main

  return (
    <div className="flex">
      <select
        id="sort-price"
        value={sortOrder}
        onChange={handleChange}
        className="px-4 py-2 "
      >
<<<<<<< HEAD
        <option value="asc">{t('price-ascending')}</option>
        <option value="desc">{t('price-descending')}</option>
=======
        <option value="asc">Price ascending</option>
        <option value="desc">Price descending</option>
>>>>>>> main
      </select>
    </div>
  );
};

export default SortByPrice;
