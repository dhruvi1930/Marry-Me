import React from 'react'
import arrow_icon from '../../assets/arrow_icon.png'
import './Breadcrum.css';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt='' width="20px"/> SHOP <img src={arrow_icon} alt='' width="20px"/> {product.category} <img src={arrow_icon} alt='' width="20px"/> {product.name}
    </div>
  )
}

export default Breadcrum
