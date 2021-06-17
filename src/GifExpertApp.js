import { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';
import PropTypes from 'prop-types';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [category, setCategory] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <CategoryAdd setCategory={setCategory} />
      <ol>
        {category.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.arrayOf(PropTypes.string),
};
export default GifExpertApp;
