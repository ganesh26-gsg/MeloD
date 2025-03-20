import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {
    const FirstFIveimages=fridgeData.slice(0,5)
  return (
   <>
   <div className="proTitle">
<h2>Fridges</h2>
   </div>
   <div className="proSection">
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

export default Fridge