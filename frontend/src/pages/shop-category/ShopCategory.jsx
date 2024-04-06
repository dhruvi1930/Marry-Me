import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../../context/ShopContext'
import dropdown_icon from '../../assets/dropdown-arrow.png'
import Item from '../../components/item/Item'
import Banner from '../../components/banner/Banner'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <Banner banner={props.banner}/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt='' width="15px"/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,index) => {
          if(props.category === item.category){
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
