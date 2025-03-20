import React from 'react'
import { menData } from '../store/data/mens'
import { useParams } from 'react-router-dom'
import Navbar from '../store/components/Navbar'
import { useCart } from '../store/context/CartContext'

const MenSingle = () => {
    const {id}=useParams()
     const {Addtocart}=useCart()
    const product=menData.find((product)=>product.id===id)
  return (
    <>
    <Navbar/>
    <div className="ind-section">
        
                <div className="ind-Img">
                    <img src={product.image} alt="" />
                </div>
              <div className="ind-details space">
              <div className="singleCompany">
                    <h2>{product.company}</h2>
                </div>
                <div className="ind-model space">
                   <h3> {product.model}</h3>
                </div>
                <div className="ind-price space">
                 <h4> {product.price}</h4>
                </div>
                <div className="ind-description space">
                  <h6>{product.description}</h6>
                </div>
                <button onClick={()=>Addtocart(product)}>Add to cart</button>
              </div>

    </div>
    
    </>
  )
}

export default MenSingle
