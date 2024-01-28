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
  const [show, setShow]=useState(false)


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
    setShow(true)
  }

  return (
    <>
    <div className='header '>
<div className='container-fluid row  pt-3 pb-3'>
   <div className='lefthead col-md-9'>
    {
      winsize ?     <FaBars className='aaa bbb' onClick={opennavlinks} /> :
<div className='lefthead '>
<FaBars className='aaa bbb' onClick={closenavlinks} />
<img className='prodata' style={{height:"25px", marginRight:"20px"}} src='https://v2retail.com/wp-content/uploads/2018/05/footer-logo.png'/>

<div className='hello'>  <img className='catimg' src='https://assets.ajio.com/medias/sys_master/root/20231110/bOHE/654e4d82ddf77915197dd666/-473Wx593H-466728451-green-MODEL.jpg' alt='catefory image'/> <NavLink className='navlink dropbtn' onClick={()=>openmeganav('men')}>MEN</NavLink></div>
<div className='hello'>  <img className='catimg' src='https://img3.junaroad.com/uiproducts/18444068/pri_175_p-1658740546.jpg' alt='catefory image'/> <NavLink className='navlink dropbtn' onClick={()=>openmeganav('women')}>WOMEN</NavLink></div>
<div className='hello'>  <img className='catimg' src='https://5.imimg.com/data5/SELLER/Default/2023/6/317594683/AU/BZ/IJ/184648135/kids-clothes.jpg' alt='catefory image'/> <NavLink className='navlink dropbtn' onClick={()=>openmeganav('kids')}>KIDS & INFANS</NavLink></div>
<div className='hello'>  <img className='catimg' src='https://v2retail.com/wp-content/uploads/2018/05/footer-logo.png' alt='catefory image'/> <NavLink className='navlink dropbtn'>BES SELLER</NavLink></div>
<div className='hello'>  <img className='catimg' src='https://v2retail.com/wp-content/uploads/2018/05/footer-logo.png' alt='catefory image'/> <NavLink className='navlink dropbtn'>DISCON ZONE</NavLink></div>
<div className='hello'>  <img className='catimg' src='https://v2retail.com/wp-content/uploads/2018/05/footer-logo.png' alt='catefory image'/>  <NavLink className='navlink dropbtn'>WINER WEAR</NavLink></div>

</div>
    }
      
    </div>
    <div className='righthead d-flex col-md-3 justify-content-end'>
      <div className='me-3 aaa'><FaRegUser/>Login</div>
      <div className='me-3 aaa'><IoMdHeartEmpty /><span className='spa'>0</span></div>
      <div className='me-3 aaa'><MdOutlineShoppingCart /><span className='spa'>0</span></div>
    </div>
</div>
    </div>

    {/* Mega menu */}
    <Megamenu prodata={getcategory} showdata={show}/>
    {
// eslint-disable-next-line
<div className='marquee'>
<marquee style={{margin:'0px'}} ><span className='mar'>Beware of fake offer and fraudulent callers</span>  <span className='mar'> GET 5% OFF ON ALL PREPAID ORDERS</span></marquee>
</div>
    }
    </>

  )
}

export default Header