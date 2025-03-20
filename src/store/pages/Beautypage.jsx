import React, { useState } from 'react'
import { BeautyData } from '../data/beauty'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Beautypage = () => {
    const [selectedProduct, setSelectedProduct]=useState([])
const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango)){
        setSelectedProduct(selectedProduct.filter((item)=>item!==mango))
    }else{
        setSelectedProduct([...selectedProduct,mango])
    }
}
const filteredProduct=selectedProduct.length===0?
BeautyData:BeautyData.filter((orange)=>selectedProduct.includes(orange.brand))

  return (
   
<>
   <Navbar />
   <div className="fullpage">
     <div className="pro-selected">
        {
            BeautyData.map((phone)=>{
                return(
                    <div className="proInput">
                        <label>
                        <input type="checkbox"
                        checked={selectedProduct.includes(phone.brand) }
                        onChange={()=>companyHandler(phone.brand)} />
                        {phone.brand}
                        </label>
                    </div>
                )
            })
        }
        
     </div>
     
     
     <div className='pageSection'>
            {
                filteredProduct.map((item)=>{
                    return(
                        <div>
                        <Link to={`/beauty/${item.id}`}>
                        <div className='pageImg'>
                            <img src={item.image} alt="" />
                        </div>
                        </Link>
                        
                        <div className="pageModel">
                            {item.brand}
                            <br></br>
     
                        </div>
                    </div>
                    )
                })
            }
        </div>
     
     
   
   </div>
   </>

  )
}

export default Beautypage