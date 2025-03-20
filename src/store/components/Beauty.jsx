import React from 'react'
import { BeautyData } from '../data/beauty'

const Beauty = () => {
    const FirstFIveimages=BeautyData.slice(0,5)
  return (
   <>
   <div className="ProTitle">
    <h2>Beauty</h2>
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

export default Beauty