import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './GalleryItem.styled';
const ImageGalleryItem = ({ id, webformatURL, onClick, tags }) => {
  return (
    <Fragment>
      <GalleryItem key={id} onClick={onClick}>
        <GalleryImage src={webformatURL} alt={tags} />
      </GalleryItem>
    </Fragment>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
