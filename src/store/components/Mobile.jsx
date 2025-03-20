import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobile = () => {

    const FirstFIveimages=mobileData.slice(0,5)
      return (
    <>
    <div className="proTitle">
        <br></br>
        <h1 style={{color:"blue"}}>Electronics</h1> <br></br>
        <h2>Mobile</h2>
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

export default Mobile