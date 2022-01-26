import React, { Fragment } from 'react';
const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <Fragment>
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    </Fragment>
  );
};

export default ImageGalleryItem;
