import React from 'react'
import { acData } from '../data/ac'

const Ac = () => {
    const FirstFIveimages=acData.slice(0,5)
  return (
  <>
    <div className='proTitle'>
        <h2>Ac</h2>
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

export default Ac