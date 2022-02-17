import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList(props) {

  const { items } = props;

  return (
    <div className='list-items'>
      {
        items.map(item => {
          return (
            <div key={item.id} className='item'>
              <Item
                id={item.id}
                title={item.title}
                price={item.price}
                picture={item.picture}
                condition={item.condition}
                address={item.address}
              />
            </div>
          )
        })
      }
    </div>
  )
};

export default ItemList;
