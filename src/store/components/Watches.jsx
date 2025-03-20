import React from 'react'
import { watchData } from '../data/watch'

const Watches = () => {
  const FirstFIveimages=watchData.slice(0,5)
        return (
      <>
      <div className="proTitle">
          <h2>Watches</h2>
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

export default Watches