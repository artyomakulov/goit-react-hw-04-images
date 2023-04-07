import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import css from 'components/ImageGallery/ImageGallery.module.css';

function ImageGallery({ onClick, renderArray }) {
  return (
    <ul className={css.imageGallery}>
      {renderArray !== null &&
        renderArray.map(({ id, webformatURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onClick={onClick}
          />
        ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  ImageGallery: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
