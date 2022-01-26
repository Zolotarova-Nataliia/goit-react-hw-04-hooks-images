import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} tags={tags} webformatURL={webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
