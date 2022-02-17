import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar';
import ItemList from '../../components/ItemList/ItemList';
import { ITEMS_PATH } from '../../config/constants';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import logger from '../../helpers/logger';
import { getItemByQuery } from '../../services/items';

function SearchList() {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const fetchData = async ({ query }) => {
    try {
      const result = await getItemByQuery({ query })
      setResults(result.items)
      setCategories(result.categories)
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchData({ query: searchParams.get('search') })
  }, [searchParams]);

  const handlerQuery = (searchText) => {
    navigate(`${ITEMS_PATH}?search=${searchText}`);
  };

  return (
    <div className="container">
      <div className='nav-header'>
        <SearchBar onResults={handlerQuery} />
      </div>
      <Breadcrumb values={categories}></Breadcrumb>
      <ItemList items={results} />
    </div>
  )
};

export default SearchList;
