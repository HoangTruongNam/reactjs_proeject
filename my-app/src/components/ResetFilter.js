import React from "react";
import { useTranslation } from 'react-i18next';

function Reset() {
const {t} = useTranslation();
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <button onClick={reloadPage}>
         {t('reset')}
    </button>
  );
}

export default Reset;
