import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
class ImageGallery extends Component {
  state = {
    modalImage: '',
  };
  onImageClick = largeImageURL => {
    this.setState({ modalImage: largeImageURL });
  };

  onCloseBtnClick = () => {
    this.setState({ modalImage: '' });
  };
  render() {
    const { items } = this.props;
    const showModal = Boolean(this.state.modalImage);
    return (
      <GalleryList>
        {showModal && (
          <Modal>
            <img src={this.state.modalImage} alt=""></img>
            <button type="button" onClick={this.onCloseBtnClick}>
              {' '}
              Close
            </button>
          </Modal>
        )}
        {items.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            onClick={() => this.onImageClick(largeImageURL)}
            key={id}
            tags={tags}
            webformatURL={webformatURL}
          />
        ))}
      </GalleryList>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  onImageClick: PropTypes.func,
  onCloseBtnClick: PropTypes.func,
};
