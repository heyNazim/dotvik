import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import axios from 'axios'
import Megamenu from './Megamenu';





const Header = () => {
  const [winsize, setWinsize]=useState(false)
  const [getcategory, setGetcategory]=useState([])
  const [category, setCategory]=useState('men')


  const getapi = async()=>{
    try {
      const result = await axios.get(`https://ecomm.dotvik.com/v2kart/service/categories/${category}/tree`);
      setGetcategory(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getapi(); 
      },[category]);
      
  const opennavlinks=()=>{
    setWinsize(false)
  }
  const closenavlinks=()=>{
    setWinsize(true)
  }

  const openmeganav=(x)=>{
    setCategory(x)
  }

  return (

    <>
    <div className='header '>
<div className='container-fluid d-flex justify-content-between pt-3 pb-3'>
   <div className='lefthead'>
    {
      winsize ?     <FaBars className='aaa bbb' onClick={opennavlinks} /> :
<div className='lefthead'>
<FaBars className='aaa bbb' onClick={closenavlinks} />
  <NavLink className='navlink dropbtn' onClick={()=>openmeganav('men')}>MEN</NavLink>
  <NavLink className='navlink dropbtn' onClick={()=>openmeganav('women')}>WOMEN</NavLink>
  <NavLink className='navlink dropbtn' onClick={()=>openmeganav('kids')}>KIDS & INFANS</NavLink>
  <NavLink className='navlink dropbtn'>BES SELLER</NavLink>
  <NavLink className='navlink dropbtn'>DISCON ZONE</NavLink>
  <NavLink className='navlink dropbtn'>WINER WEAR</NavLink>

</div>
    }
      
    </div>
    <div className='righthead d-flex '>
      <div className='me-3 aaa'><FaRegUser/>Login</div>
      <div className='me-3 aaa'><IoMdHeartEmpty /></div>
      <div className='me-3 aaa'><MdOutlineShoppingCart /></div>
    </div>
</div>
    </div>

    {/* Mega menu */}
    <Megamenu prodata={getcategory}/>
    {
// eslint-disable-next-line
<marquee style={{margin:'0px'}} className='marqee'><span className='mar'>Beware of fake offer and fraudulent callers</span>  <span className='mar'> GET 5% OFF ON ALL PREPAID ORDERS</span></marquee>
    }
    </>

  )
}

export default Header