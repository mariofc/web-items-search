import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar(props) {
  const [inputItem, setInputItem] = useState('');

  const handlerChange = (e) => {
    setInputItem(e.target.value);
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (inputItem === '') return false;
    props.onResults(inputItem);
  }

  return (
    <div>
      <a className='logo' href='/'></a>
      <form onSubmit={handlerSubmit}>
        <div className="field has-addons">
          <input
            className="input"
            onChange={handlerChange}
            type="text"
            placeholder="Nunca dejes de buscar" />

          <button className="button is-info" data-testid="button-search-testid">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
