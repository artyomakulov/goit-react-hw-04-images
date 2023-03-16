import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import css from 'components/Searchbar/Searchbar.module.css'


export default class Searchbar extends Component {

  state = {
    searchName:'',
  }

  
  handleSearchName = e => {
    this.setState({searchName: e.currentTarget.value.toLowerCase()}) 
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.searchName.trim() === '') {
      alert('Введите объект поиска')
      return;
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({searchName: ''})
  } 

    render ( ) {
      return ( 
      <header className={css.Searchbar}>
        <form 
        className={css.SearchForm}
        onSubmit={this.handleSubmit}> 
          <button 
          type="submit" 
          
          className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>
      
          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchName}
            value={this.state.searchName}
          />
        </form>
      </header>
      )
    }
}

Searchbar.propTypes = {
  onSubmit:PropTypes.func,
}
