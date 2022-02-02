import React, { useCallback, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-spinkit';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import styled from 'styled-components';
import ImageGallery from './Gallery/ImageGallery/ImageGallery';
import Button from './Gallery/Button/Button';
import { fetchPicsApi } from './Services/fetchAPI';
import Searchbar from './Gallery/Searchbar/Searchbar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  justify-items: center;
`;
const Message = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  color: #f5b766;
  align-items: center;
  svg {
    margin-top: 5px;
    margin-left: 8px;
    width: 30px;
    height: 30px;
  }
`;

export default function App() {
  const [pictures, setPictures] = useState('');
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      if (filter !== '') {
        const results = await fetchPicsApi(filter, page);
        setPictures(p => [...p, ...results]);
      }
    } catch (err) {
      toast.error('Возникла ошибка');
    } finally {
      setLoading(false);
    }
  }, [filter, page, setPictures]);

  useEffect(() => {
    setPictures([]);
  }, [filter]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleFormSubmit = query => {
    setFilter(query);
    setPage(1);
  };

  const onLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Searchbar onSubmitForm={handleFormSubmit} />
      <Container>
        {filter === '' ? (
          <>
            <Message>
              Введите что-нибудь
              <BsFillEmojiSmileFill />
            </Message>
          </>
        ) : (
          <ImageGallery items={pictures} />
        )}
        {loading && <Spinner name="three-bounce" color="#f5b766" />}
        {pictures.length !== 0 && <Button onClick={onLoadMoreClick} />}
        <ToastContainer />
      </Container>
    </>
  );
}
