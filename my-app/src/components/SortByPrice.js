import React from 'react';
import { useTranslation } from 'react-i18next';

const SortByPrice = ({ sortOrder, onSortChange }) => {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };
  const {t} = useTranslation();

  return (
    <div className="flex">
      <select
        id="sort-price"
        value={sortOrder}
        onChange={handleChange}
        className="px-4 py-2 "
      >
        <option value="asc">{t('price-ascending')}</option>
        <option value="desc">{t('price-descending')}</option>
      </select>
    </div>
  );
};

export default SortByPrice;
