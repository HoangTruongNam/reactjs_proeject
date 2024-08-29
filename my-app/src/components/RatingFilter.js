import React from 'react';
import { useTranslation } from 'react-i18next';

const RatingFilter = ({ ratingCounts, onRatingClick }) => {
  const {t} = useTranslation();
  return (
    <div>
      <h2 className="mb-4 font-bold">{t('rating')}</h2>
      <ul className="flex flex-col-reverse">
        {Object.entries(ratingCounts).map(([rating, count]) => (
          <li key={rating}>
            <button onClick={() => onRatingClick(Number(rating))}>
              <div className="flex justify-start mb-2">
                <div className="text-2xl w-40 flex justify-start">{'★'.repeat(Number(rating))}</div>
                <div> {count}</div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingFilter;
