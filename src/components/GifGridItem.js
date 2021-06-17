import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, imgs: url }) => {
  return (
    <div className='card animate__animated animate__fadeInDown'>
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgs: PropTypes.string.isRequired,
};
