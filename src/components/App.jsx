import React, { Component } from 'react';

import ImageGallery from './Gallery/ImageGallery/ImageGallery';
import Button from './Gallery/Button/Button';
import { fetchPicsApi } from './Services/fetchAPI';
import { SearchBar } from 'components';
export class App extends Component {
  state = {
    pictures: [],
    page: 1,
    filter: '',
  };

  componentDidMount() {
    this.fetchImages();
  }
  componentDidUpdate(_, prevState) {
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const prevFilter = prevState.filter;
    const currentFilter = this.state.filter;
    console.log({ prevFilter, currentFilter, prevPage, currentPage });
    if (prevPage !== currentPage || prevFilter !== currentFilter) {
      this.fetchImages();
    }
  }

  handleFormSubmit = query => {
    this.setState({ filter: query, page: 1, pictures: [] });
  };

  fetchImages = async () => {
    const { filter, page } = this.state;
    if (filter !== '') {
      const results = await fetchPicsApi(filter, page);
      this.setState(prevState => {
        return {
          pictures: [...prevState.pictures, ...results],
        };
      });
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
      <>
        <SearchBar onSubmitForm={handleFormSubmit} />
        {filter !== '' && <ImageGallery items={pictures} />}
        {pictures.length !== 0 && <Button onClick={onLoadMoreClick} />}
      </>
    );
  }
}
