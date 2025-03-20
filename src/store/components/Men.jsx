import React from 'react'
import { menData } from '../data/mens'
const Men = () => {
    const FirstFIveimages=menData.slice(0,5)
  return (
<>
<div className="proTitle">
    <h2>Men's</h2>
</div>
<div className="proSection">
    {
        FirstFIveimages.map((item)=>{
            return(
                <div className="imgBox">
                    <img className='proImage' src={item.image} alt="" />
                </div>
            )
        }
        )
    }
</div>



</>
   
  )
}

export default Men