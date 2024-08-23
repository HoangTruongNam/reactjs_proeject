// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Import các file JSON
import enTranslation from '../locales/en.json';
import viTranslation from '../locales/vi.json';

const resources = {
  en: {
    translation: enTranslation
  },
  vi: {
    translation: viTranslation
  }
};

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự phòng nếu không tìm thấy ngôn ngữ yêu cầu
    interpolation: {
      escapeValue: false // React đã tự động xử lý việc escape XSS
    }
  });

export default i18n;
