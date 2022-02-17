import React from 'react';
import NumberFormat from 'react-number-format';
import './ItemDetail.css';

function ItemDetail(props) {

  const { title, condition, description, picture, price, soldQuantity } = props;
  const decimals = price && String(price.decimals).padEnd(2, '0');

  return (
    <div className="item-detail" data-testid="item-testid">
      <div className="item-detail-wrapper">
        <div className="item-detail-image">
          <img alt={title} src={picture} />
        </div>
        <div className="item-detail-info">
          <div className="condition">{condition} - {soldQuantity} Vendidos</div>
          <div className="title">{title}</div>
          <div className="amount">
            <NumberFormat
              value={price && price.amount}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'} />
            <sup>{decimals}</sup>
          </div>
        </div>
      </div >
      <h2 className="item-detail-description-title">Descripción del producto</h2>
      <p className="item-detail-description">{description}</p>
    </div >
  )
}


export default ItemDetail;
