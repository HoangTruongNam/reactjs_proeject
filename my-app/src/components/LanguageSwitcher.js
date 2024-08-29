import React from 'react';
import { useTranslation } from 'react-i18next';
import '../asset/css/LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang flex justify-center">
      <button onClick={() => changeLanguage('en')}>En/</button>
      <button onClick={() => changeLanguage('vi')}>Vi</button>
    </div>
  );
};

export default LanguageSwitcher;
