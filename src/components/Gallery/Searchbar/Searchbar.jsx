import { Component } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Header, SearchForm, SearchBtn, SearchInput } from './SearchBar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const searchQuery = event.target.value.trim();
    this.setState({ query: searchQuery.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast('Введите что-нибудь! :)', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
      });

      return;
    }

    this.props.onSubmitForm(this.state.query);
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />

          <SearchBtn type="submit">
            <BsSearch />
          </SearchBtn>
        </SearchForm>
      </Header>
    );
  }
}
Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
