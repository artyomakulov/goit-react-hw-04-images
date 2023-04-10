import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, onClick, largeImageURL }) => {
  return (
    <>
      <li
        onClick={() => onClick(largeImageURL)}
        key={id}
        id={id}
        className={css.ImageGalleryItem}
      >
        <img src={webformatURL} alt="" className={css.ImageGalleryItem_image} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
