import { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const categories = ['One Punch'];
  const [category, setCategory] = useState(categories);

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

export default GifExpertApp;
