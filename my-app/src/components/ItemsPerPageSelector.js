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
      </select>
    </div>
  );
};

export default ItemsPerPageSelector;
