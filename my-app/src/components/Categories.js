import React, { useState } from 'react';

function Accordion({ products, onCategorySelect }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeSecondIndex, setActiveSecondIndex] = useState(null);

    const uniqueFirstCategories = [
        ...new Set(products.map(product => product.categories[0]))
    ];

    const handleToggleFirst = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        setActiveSecondIndex(null); // Reset second index when changing first category
    };


    const handleCategorySelect = (category) => {
        onCategorySelect(category);
    };

    return (
        <div className="mt-10">
            {uniqueFirstCategories.map((firstCategory, index) => (
                <div key={index}>
                    <div className="cursor-pointer mb-4 font-bold"
                        
                        onClick={() => handleToggleFirst(index)}
                    >
                        {firstCategory}
                    </div>
                    {activeIndex === index && (
                        <div style={{ paddingLeft: '20px', paddingBottom: '10px' }}>
                            {[...new Set(
                                products
                                    .filter(product => product.categories[0] === firstCategory)
                                    .map(product => product.categories[1])
                            )].map((secondCategory, idx) => (
                                <div key={idx}>
                                    <div className="p-1 cursor-pointer mb-1"
                                        onClick={() => handleCategorySelect({
                                            categoryFirst: firstCategory,
                                            categorySecond: secondCategory
                                        })}
                                    >
                                        {secondCategory}
                                    </div>
                                    {activeSecondIndex === idx && (
                                        <div className="pl-5">
                                            {/* You can display additional details if needed */}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;
