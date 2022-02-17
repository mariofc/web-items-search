import React from 'react';
import { Link } from 'react-router-dom';
import { ITEMS_PATH } from '../../config/constants';
import NumberFormat from 'react-number-format';

function Item(props) {

  const { id, picture, title, price, condition, address } = props;
  const decimals = price && String(price.decimals).padEnd(2, '0');

  return (
    <Link to={`${ITEMS_PATH}/${id}`} className="card" data-testid="item-link-testid">
      <div className="card-image">
        <img
          alt={title}
          src={picture}
        />
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="amount">
              <NumberFormat
                value={price && ~~price.amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'} />
              <sup>{decimals}</sup>
            </p>
            <p className="name">{title}</p>
            <p className="name">{condition}</p>
          </div>
        </div>
      </div>
      <div className="card-address">
        <p className="name">{address}</p>
      </div>
    </Link>
  )
}


export default Item;
