import React, { useState } from 'react';
import Products from '../components/Product/Products';
import NewsLetter from '../components/NewsLetter';

const CatagoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");
  const handleCategoryChange = (event) => {
  setSelectedCategory(event.currentTarget.value);
  };

  return (
    <>
      <div className="flex flex-col p-5">
        <h1 className="text-[30px] text-[#8a4af3]">Collection's</h1>
        <div className="flex items-center justify-between mt-[11px]">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>
            <select
              className="ml-3 border-2 bg-white border-silver selection:border-gray-500 outline-none rounded-md mobile:ml-0"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelry</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
        </div>
      </div>
      <Products category={selectedCategory} />
      <NewsLetter />
    </>
  );
};

export default CatagoryPage;