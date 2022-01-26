import { Component } from 'react';
import { toast } from 'react-toastify';

export class SearchBar extends Component {
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
      toast('Введите что-нибудь', {
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
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
