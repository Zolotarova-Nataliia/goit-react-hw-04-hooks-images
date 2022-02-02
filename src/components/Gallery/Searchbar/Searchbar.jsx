import { useState } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Header, SearchForm, SearchBtn, SearchInput } from './SearchBar.styled';

export default function Searchbar(props) {
  const [query, setQuery] = useState('');
  const handleChange = event => {
    const searchQuery = event.target.value.trim();
    setQuery(searchQuery.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast('Введите что-нибудь! :)', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
      });
      return;
    }

    props.onSubmitForm(query);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />

        <SearchBtn type="submit">
          <BsSearch />
        </SearchBtn>
      </SearchForm>
    </Header>
  );
}
Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
