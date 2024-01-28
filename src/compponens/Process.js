import React from 'react'
import { RiTruckLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { GiReturnArrow } from "react-icons/gi";
import { FaHandHoldingHand } from "react-icons/fa6";




const Process = () => {
  return (
    <>
    <div className='process p-4'>
            <hr/>
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                <GrCertificate className='ppp' /> <span className='prodata'>Original Products</span>
                </div>
                <div className='col-3'>
                <RiTruckLine className='ppp' /><span className='prodata' > Free Shipping Above 999</span>
                </div>
                <div className='col-3'>
                <FaHandHoldingHand  className='ppp' />   <span className='prodata' >COD Available</span>
                </div>
                <div className='col-3'>
                <GiReturnArrow className='ppp' /> <span className='prodata' >Easy Return Within 7 Days</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Process