import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { GalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import { ModalBtnClose } from '../Modal/Modal.styled';

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
            <ModalBtnClose type="button" onClick={this.onCloseBtnClick}>
              <RiCloseCircleLine />
            </ModalBtnClose>
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
