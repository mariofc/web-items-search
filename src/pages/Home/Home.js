import React from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar';
import { ITEMS_PATH } from '../../config/constants';

function Home() {

  let navigate = useNavigate();

  const handlerQuery = (searchText) => {
    navigate(`${ITEMS_PATH}?search=${searchText}`);
  };

  return (
    <div className="container">
      <div className='nav-header'>
        <SearchBar onResults={handlerQuery} />
      </div>
    </div>
  )
};

export default Home;
