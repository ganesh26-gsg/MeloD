import React from 'react'
import { womanData } from '../data/women'

const Women = () => {
 const FirstFIveimages=womanData.slice(0,5)
     return (
     <>
       <div className='proTitle'>
           <h2>Women</h2>
       </div>
       <div className='proSection'> 
           {
               FirstFIveimages.map((item)=>{
                   return(
                       <div className="imgBox">
                           <img className='proImage' src={item.image} alt="" />
                       </div>
                   )
               })
           }
       </div>
       
     
     
     
     </>
     )
 
 
}

export default Women