import React from 'react';
import './Breadcrumb.css';

function Breadcrumb(props) {

  const { values } = props;

  return (
    <div className='breadcrumbs'>
      {values.join(' > ')}
    </div>
  )
};

export default Breadcrumb;
