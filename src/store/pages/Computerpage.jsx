import React, { useState } from 'react'
import { computerData } from '../data/computer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Computerpage = () => {
const [selectedProduct, setSelectedProduct]=useState([])
const companyHandler=(mango)=>{
  if(selectedProduct.includes(mango)){
    setSelectedProduct(selectedProduct.filter((item)=>item!==mango))
  }else{
    setSelectedProduct([...selectedProduct,mango])
  }
}
const filteredProduct=selectedProduct.length===0?
computerData:computerData.filter((orange)=>selectedProduct.includes(orange.company))

  return (
    
<>
   <Navbar />
   <div className="fullpage">
<div className="pro-selected">
  {
    computerData.map((phone)=>{
      return(
        <div className="pro-input">
          <input type="checkbox" 
          checked={selectedProduct.includes(phone.company)}
          onChange={()=>companyHandler(phone.company)}

          />
          {phone.company}
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
                     <Link to={`/computer/${item.id}`}>
                     <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                     </Link>
                    <div className="pageModel">
                        {item.company}
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

export default Computerpage