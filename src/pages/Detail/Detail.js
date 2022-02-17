import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { ITEMS_PATH } from '../../config/constants';
import logger from '../../helpers/logger';
import { getItemById } from '../../services/items';

function Detail() {
  const [item, setItem] = useState({});

  let navigate = useNavigate();
  const { itemId } = useParams();

  const handlerQuery = (searchText) => {
    navigate(`${ITEMS_PATH}?search=${searchText}`);
  };

  const fetchData = async ({ itemId }) => {
    try {
      const result = await getItemById(itemId)
      setItem(result.item);
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchData({ itemId })
  }, [itemId]);

  const { title, condition, description, picture, sold_quantity, price } = item

  return (
    <div className="container">
      <div className='nav-header'>
        <SearchBar onResults={handlerQuery} />
      </div>
      <ItemDetail
        title={title}
        picture={picture}
        description={description}
        condition={condition}
        soldQuantity={sold_quantity}
        price={price}
      />
    </div>
  )
};

export default Detail;


