import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, onClick }) => {
  return (
    <>
      <li onClick={onClick} key={id} id={id} className={css.ImageGalleryItem}>
        <img src={webformatURL} alt="" className={css.ImageGalleryItem_image} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
