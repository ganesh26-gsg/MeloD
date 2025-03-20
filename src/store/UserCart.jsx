import React from 'react'
import { useCart } from './context/CartContext'
import Navbar from './components/Navbar'
const UserCart = () => {
    const {cartItems,Addtocart ,removeFromCart}=useCart()
  return (
    <>        

    <Navbar />
    <div>
     <h2 className='y-cart'>Your Cart</h2>
  {cartItems.length ===0 ?
     (<p className='empty'>Your Cart is Empty</p>):
  
    <div>
      {cartItems.map((item)=>{
        return(
            <div className="cart-section">
                <div className="cart-img">
                    <img src={item.image} alt="" />
                </div>
                <div className='cart-details' >
                <div className="cart-company">
                    <h2>{item.company}</h2>
                </div>
                <div className="cart-model">
                    {item.model}
                </div>
                <div className="cart-price">
                   <h4> {item.price}</h4>
                </div>
                <button className='removeBtn' onClick={()=>removeFromCart(item)}>remove</button>
           </div>
            </div>
        )
      })}
    </div>
}
    </div>
    </>
  )
}

export default UserCart
