import React, { useState, useEffect } from 'react';

function UniqueSecondCategories() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Giả sử API trả về một mảng các sản phẩm
        fetch('http://localhost:3001/Productdata')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    // Lấy tất cả các danh mục thứ 2 và loại bỏ các phần tử trùng lặp
    const uniqueSecondCategories = [
        ...new Set(products.map(product => product.categories[1]))
    ];

    return (
        <div className="">
            <ul>
                {uniqueSecondCategories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </div>
    );
}

export default UniqueSecondCategories;
