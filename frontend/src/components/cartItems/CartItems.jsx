import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import delete_icon from '../../assets/delete_icon.png'
import './CartItems.css'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((event) => {
            if(cartItems[event.id]>0){
                return (
                    <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={event.image} alt='' className='carticon-product-icon'/>
                        <p>{event.name}</p>
                        <p>${event.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[event.id]}</button>
                        <p>${event.new_price*cartItems[event.id]}</p>
                        <img className='cartitems-remove-icon' src={delete_icon} onClick={() => removeFromCart(event.id)} alt=''/>
                    </div>
                </div>
                )
            }
            return null
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shopping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div> 
        </div>
    </div>
  )
}

export default CartItems
