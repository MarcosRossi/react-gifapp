import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = function ({ setCategory }) {
  const [categoryName, setcategoryName] = useState('');
  const handleChange = (e) => {
    setcategoryName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim().length <= 2) return;

    setCategory((cats) => [categoryName, ...cats]);
    setcategoryName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={categoryName}
        onChange={handleChange}
        type='text'
        placeholder='Insert a new  category name'
      />
    </form>
  );
};

CategoryAdd.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
export default CategoryAdd;
