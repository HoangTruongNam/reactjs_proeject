import React from 'react';
import '../asset/css/Filter.css';

function Category({ category }) {
  return (
    <div className="category-item">
      <span className="subcategory ml-2">{category.title}</span>
      <div className="ml-2"> 
        {category.child.map((childCategory) => (
          // Map over the titles array
          <div key={childCategory.title}>
            {childCategory.title.map((title, index) => (
              <div key={index} className="subcategory ml-2">
                {title}
              </div>
            ))}
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
