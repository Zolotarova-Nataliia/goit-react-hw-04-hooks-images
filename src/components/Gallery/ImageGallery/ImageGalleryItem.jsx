import React, { Fragment } from 'react';
const ImageGalleryItem = ({ id, webformatURL, onClick, tags }) => {
  return (
    <Fragment>
      <li key={id} onClick={onClick}>
        <img src={webformatURL} alt={tags} />
      </li>
    </Fragment>
  );
};

export default ImageGalleryItem;
