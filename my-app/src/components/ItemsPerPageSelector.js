<<<<<<< HEAD
import React from 'react';
import '../asset/scripts/i18n'
import { useTranslation } from 'react-i18next';

const ItemsPerPageSelector = ({ itemsPerPage, onItemsPerPageChange }) => {
const {t} = useTranslation();
  return (
    <div>
      <select className="ml-4 h-10" value={itemsPerPage} onChange={onItemsPerPageChange}>
        <option value={4}>{t('4h')}</option>
        <option value={8}>{t('8h')}</option>
        <option value={12}>{t('12h')}</option>
        <option value={16}>{t('16h')}</option>
=======
// src/components/ItemsPerPageSelector.js

import React from 'react';

const ItemsPerPageSelector = ({ itemsPerPage, onItemsPerPageChange }) => {
  return (
    <div>
      <select className="ml-4 h-10" value={itemsPerPage} onChange={onItemsPerPageChange}>
        <option value={4}>4 hits per page</option>
        <option value={8}>8 hits per page</option>
        <option value={12}>12 hits per page</option>
        <option value={16}>16 hits per page</option>
>>>>>>> main
      </select>
    </div>
  );
};

export default ItemsPerPageSelector;
