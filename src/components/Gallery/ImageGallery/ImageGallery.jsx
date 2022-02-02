import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { GalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import { ModalBtnClose } from '../Modal/Modal.styled';

export default function ImageGallery(props) {
  const [modalImg, setModalImg] = useState('');
  const onImageClick = largeImageURL => {
    setModalImg(largeImageURL);
  };

  const onCloseBtnClick = () => {
    setModalImg('');
  };

  const showModal = Boolean(modalImg);
  return (
    <GalleryList>
      {showModal && (
        <Modal>
          <img src={modalImg} alt=""></img>
          <ModalBtnClose type="button" onClick={onCloseBtnClick}>
            <RiCloseCircleLine />
          </ModalBtnClose>
        </Modal>
      )}
      {props.items.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          onClick={() => onImageClick(largeImageURL)}
          key={id}
          tags={tags}
          webformatURL={webformatURL}
        />
      ))}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  onImageClick: PropTypes.func,
  onCloseBtnClick: PropTypes.func,
};
