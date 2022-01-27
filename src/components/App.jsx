import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-spinkit';
import { GiSniffingDog } from 'react-icons/gi';
import styled from 'styled-components';
import ImageGallery from './Gallery/ImageGallery/ImageGallery';
import Button from './Gallery/Button/Button';
import { fetchPicsApi } from './Services/fetchAPI';
import { Searchbar } from './Gallery/Searchbar/Searchbar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  justify-items: center;
`;
const Message = styled.h1`
  font-size: 30px;
  color: #8a9bcf;
`;
const CorgiMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fdcda0;
  > svg {
    margin-top: 8px;
    width: 26px;
    height: 26px;
  }
`;

export class App extends Component {
  state = {
    pictures: [],
    page: 1,
    filter: '',
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const prevFilter = prevState.filter;
    const currentFilter = this.state.filter;
    if (prevFilter !== currentFilter) {
      this.setState({ pictures: [] });
    }
    if (prevPage !== currentPage || prevFilter !== currentFilter) {
      this.fetchImages();
    }
  }

  handleFormSubmit = query => {
    this.setState({ filter: query, page: 1 });
  };

  fetchImages = async () => {
    const { filter, page } = this.state;
    this.setState({ loading: true });
    try {
      if (filter !== '') {
        const results = await fetchPicsApi(filter, page);
        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...results],
          };
        });
      }
    } catch (err) {
      toast.error('Возникла ошибка');
    } finally {
      this.setState({ loading: false });
    }
  };

  onLoadMoreClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { pictures, filter } = this.state;
    const { handleFormSubmit, onLoadMoreClick } = this;
    return (
      <Container>
        <Searchbar onSubmitForm={handleFormSubmit} />
        {filter === '' ? (
          <>
            <Message>Введите что-нибудь :)</Message>
            <CorgiMessage>
              <p>Желательно "corgi"</p>
              <GiSniffingDog />
            </CorgiMessage>
          </>
        ) : (
          <ImageGallery items={pictures} />
        )}
        {this.state.loading && <Spinner name="three-bounce" color="#fbcdf2" />}
        {pictures.length !== 0 && <Button onClick={onLoadMoreClick} />}
        <ToastContainer />
      </Container>
    );
  }
}
