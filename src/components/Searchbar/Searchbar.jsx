import React, {useState} from 'react';
import PropTypes from 'prop-types'; 
import css from 'components/Searchbar/Searchbar.module.css'


export default function Searchbar({onSubmit}) {
const [searchName, setSerchName] = useState('')

  const handleSearchName = e => {
    setSerchName(e.currentTarget.value.toLowerCase()) 
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (searchName.trim() === '') {
      alert('Введите объект поиска')
      return;
    }

    onSubmit(searchName);
    setSerchName('')
  } 
  
      return ( 
      <header className={css.Searchbar}>
        <form 
        className={css.SearchForm}
        onSubmit={handleSubmit}> 
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
            onChange={handleSearchName}
            value={searchName}
          />
        </form>
      </header>
      )
}

Searchbar.propTypes = {
  onSubmit:PropTypes.func,
}
